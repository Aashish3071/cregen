"use client";

import { useEffect, useState } from "react";
import { PRIVACY_SECTIONS } from "@/lib/privacyData";
import { ListFilter, ChevronRight } from "lucide-react";

interface TOCProps {
  activeId: string;
  onSelectSection: (id: string) => void;
}

export default function TableOfContents({ activeId, onSelectSection }: TOCProps) {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sticky top-24">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
        <ListFilter className="h-4 w-4 text-blue-600" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
          Table of Contents
        </h3>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        13 comprehensive clauses governing your data rights, AI processing, and safety.
      </p>

      <nav className="mt-4 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 space-y-1 text-xs">
        {PRIVACY_SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`group flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-all ${
                isActive
                  ? "bg-blue-50/80 font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-mono font-bold ${
                  isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                }`}
              >
                {sec.number}
              </span>
              <span className="line-clamp-1 flex-1 leading-snug">{sec.title}</span>
              {isActive && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue-600" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
