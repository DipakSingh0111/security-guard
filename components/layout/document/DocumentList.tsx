"use client";

import { useState } from "react";
import { LuLoader, LuExternalLink } from "react-icons/lu";

interface DocumentItem {
  id: string;
  title: string;
  code: string;
  fileUrl?: string;
}

export default function DocumentList({
  documents,
}: {
  documents: DocumentItem[];
}) {
  const [loadingDocId, setLoadingDocId] = useState<string | null>(null);

  const handleClick = (doc: DocumentItem, index: number) => {
    // If it's the first two documents (index 0, 1: EPF Delhi, ESI Delhi)
    if (index === 0 || index === 1) {
      setLoadingDocId(doc.id);
      // Simulate loading state (stays loading as requested or gives simulated load)
      setTimeout(() => {
        setLoadingDocId(null);
      }, 3500);
      return;
    }

    // For last 2 documents (GST Delhi, Account Detail)
    if (doc.fileUrl && doc.fileUrl !== "#") {
      window.open(doc.fileUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4">
      {documents.map((doc, index) => {
        const isFirstTwo = index === 0 || index === 1;
        const isLoading = loadingDocId === doc.id;
        const hasUrl = doc.fileUrl && doc.fileUrl !== "#";

        const cardContent = (
          <>
            {/* PDF Adobe Icon Frame */}
            <div className="relative my-4 flex h-28 w-28 items-center justify-center rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-gray-100 p-4 shadow-inner transition-transform duration-300 group-hover:scale-105">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <LuLoader
                    size={36}
                    className="animate-spin text-[#d9222a]"
                  />
                  <span className="text-[11px] font-bold text-[#b91c1c]">
                    Loading...
                  </span>
                </div>
              ) : (
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 drop-shadow-md"
                >
                  <rect
                    width="64"
                    height="64"
                    rx="14"
                    fill="#fdfdfd"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 46C18 43.5 22 36 29 27C27 21 25.5 14 27.5 13C29 12 31 13 32 17C33.5 23 33 27 35 30C40 33 46 36 47 38.5C48 41 46 43 43 43C39 43 33 39 29.5 37C24.5 42 19 46 18 46Z"
                    stroke="#d9222a"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31 29C29 32 23 39 19.5 43.5C21 44.5 24 43 27.5 39"
                    stroke="#b91c1c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>

            {/* Bottom Red Label */}
            <div className="w-full rounded bg-[#9b1d20] py-2 text-center shadow-md transition-colors group-hover:bg-[#b91c1c] flex items-center justify-center gap-1.5">
              <span className="block text-xs font-bold uppercase tracking-wide text-white md:text-sm">
                {doc.title}
              </span>
              {!isFirstTwo && hasUrl && (
                <LuExternalLink size={13} className="text-white/80" />
              )}
            </div>
          </>
        );

        if (!isFirstTwo && hasUrl) {
          return (
            <a
              key={doc.id}
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-xl cursor-pointer select-none"
            >
              {cardContent}
            </a>
          );
        }

        return (
          <div
            key={doc.id}
            onClick={() => handleClick(doc, index)}
            className={`group relative flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-xl cursor-pointer select-none ${
              isLoading ? "pointer-events-none ring-2 ring-red-400" : ""
            }`}
          >
            {cardContent}
          </div>
        );
      })}
    </div>
  );
}
