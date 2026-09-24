"use client";

import React from "react";
import { FileSpreadsheet, FileText, Download } from "lucide-react";

interface Props {
  leadId: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  fileUrl?: string;
  messageFallback?: string;
  adminSecret: string;
}

// Try to extract file info from the message text for older leads
// e.g. "Corporate Asset Manifest Uploaded: HimankResume.pdf (121.5 KB, PDF)"
function parseFileFromMessage(message?: string): { name: string; size: string; type: string } | null {
  if (!message) return null;
  const match = message.match(/Uploaded:\s*([^\s(]+)\s*\(([^,]+),\s*([^)]+)\)/i);
  if (match) {
    return { name: match[1].trim(), size: match[2].trim(), type: match[3].trim() };
  }
  return null;
}

export function LeadManifestViewer({
  leadId,
  fileName,
  fileSize,
  fileType,
  fileUrl,
  messageFallback,
  adminSecret,
}: Props) {
  // Use explicit fileName, or fall back to parsing the message text
  const fallback = !fileName ? parseFileFromMessage(messageFallback) : null;

  const resolvedName = fileName || fallback?.name;
  const resolvedSize = fileSize || fallback?.size;
  const resolvedType = fileType || fallback?.type;

  // Nothing to render if no file info anywhere
  if (!resolvedName && !fileUrl) return null;

  const displayName = resolvedName || "uploaded_manifest.csv";
  const isCSV =
    displayName.toLowerCase().endsWith(".csv") || resolvedType?.toUpperCase() === "CSV";

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
            {resolvedType || "File"} {resolvedSize ? `• ${resolvedSize}` : ""}
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
