"use client";

import { Search, X } from "lucide-react";

interface PolicySearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultCount: number;
}

export default function PolicySearch({
  searchTerm,
  onSearchChange,
  resultCount,
}: PolicySearchProps) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search clauses (e.g. deletion, AI models, voice cloning, Google Play)..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 rounded-md p-0.5 text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {searchTerm && (
        <div className="mt-2 flex items-center justify-between px-1 text-xs text-slate-500">
          <span>
            Found <strong>{resultCount}</strong> matching clause{resultCount !== 1 ? "s" : ""}
          </span>
          <button
            onClick={() => onSearchChange("")}
            className="text-blue-600 hover:underline font-medium"
          >
            Reset filter
          </button>
        </div>
      )}
    </div>
  );
}
