import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

function getMimeType(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "csv":
      return "text/csv; charset=utf-8";
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "xls":
      return "application/vnd.ms-excel";
    case "pdf":
      return "application/pdf";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const url = new URL(req.url);
  const secretFromQuery = url.searchParams.get("secret");
  const secretFromHeader = req.headers.get("x-admin-secret");
  const secret = secretFromQuery || secretFromHeader;

  if (!secret || secret !== (process.env.ADMIN_SECRET_KEY || "default_secret")) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await dbConnect();
    // Cast explicitly so all raw MongoDB fields are accessible
    const lead = await Lead.findById(id).lean() as Record<string, unknown> | null;

    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    const fileData = lead.fileData as string | undefined;
    const fileUrl = lead.fileUrl as string | undefined;
    const fileName = (lead.fileName as string | undefined) || `manifest_${id}.csv`;

    console.log(`[download] Lead ${id}: hasFileData=${!!fileData}, fileDataLen=${fileData?.length ?? 0}, hasFileUrl=${!!fileUrl}`);

    // 1. If base64 fileData is stored
    if (fileData) {
      const base64Data = fileData.includes("base64,")
        ? fileData.split("base64,")[1]
        : fileData;

      const buffer = Buffer.from(base64Data, "base64");
      const contentType = getMimeType(fileName);

      return new Response(buffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename="${encodeURIComponent(fileName)}"`,
          "Content-Length": buffer.length.toString(),
        },
      });
    }

    // 2. If Cloudinary URL is stored
    if (fileUrl) {
      return NextResponse.redirect(fileUrl);
    }

    return NextResponse.json(
      { success: false, error: "No manifest file attached to this lead.", debug: { hasFileData: false, hasFileUrl: false, fields: Object.keys(lead) } },
      { status: 404 }
    );
  } catch (error) {
    console.error("GET /api/leads/[id]/download error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
