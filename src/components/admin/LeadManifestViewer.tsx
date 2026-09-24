"use client";

import React from "react";
import { FileSpreadsheet, FileText, Download } from "lucide-react";

interface Props {
  leadId: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  fileUrl?: string;
  adminSecret: string;
}

export function LeadManifestViewer({
  leadId,
  fileName,
  fileSize,
  fileType,
  fileUrl,
  adminSecret,
}: Props) {


  const displayName = fileName || "uploaded_manifest.csv";
  const isCSV =
    displayName.toLowerCase().endsWith(".csv") || fileType === "CSV";

  // Nothing to render if no file was attached
  if (!fileName && !fileUrl) return null;

  const downloadUrl = `/api/leads/${leadId}/download?secret=${encodeURIComponent(adminSecret)}`;

  return (
    <div className="mt-2.5 p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
      {/* File info */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
          {isCSV ? (
            <FileSpreadsheet className="w-4 h-4" />
          ) : (
            <FileText className="w-4 h-4" />
          )}
        </div>
        <div className="min-w-0">
          <p
            className="text-xs font-bold text-emerald-950 truncate"
            title={displayName}
          >
            {displayName}
          </p>
          <p className="text-[11px] text-emerald-700">
            {fileType || "File"} {fileSize ? `• ${fileSize}` : ""}
          </p>
        </div>
      </div>

      {/* Download button — saves directly to device */}
      <a
        href={downloadUrl}
        download={displayName}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-lg transition-all shadow-xs flex-shrink-0 self-end sm:self-auto"
        title={`Download ${displayName}`}
      >
        <Download className="w-3.5 h-3.5" />
        <span>Download File</span>
      </a>
    </div>
  );
}

