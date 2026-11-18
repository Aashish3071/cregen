"use client";

import { useState } from "react";
import { PrivacySection } from "@/lib/privacyData";
import { Link2, Check, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

interface PolicySectionCardProps {
  section: PrivacySection;
  isHighlighted?: boolean;
}

export default function PolicySectionCard({
  section,
  isHighlighted,
}: PolicySectionCardProps) {
  const [copied, setCopied] = useState(false);

  const copyAnchorLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/privacy#${section.id}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article
      id={section.id}
      className={`group scroll-mt-24 rounded-2xl border bg-white p-6 sm:p-8 transition-all ${
        isHighlighted
          ? "border-blue-500/70 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20"
          : "border-slate-200/80 shadow-sm hover:border-slate-300"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-500/30">
            {section.number}
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {section.title}
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">{section.shortSummary}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {section.badge && (
            <span className="hidden sm:inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
              {section.badge}
            </span>
          )}
          <button
            onClick={copyAnchorLink}
            title="Copy link to this section"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 opacity-80 hover:border-slate-300 hover:text-slate-600 group-hover:opacity-100 transition-all"
            aria-label="Copy section link"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-600" />
            ) : (
              <Link2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-600">
        {section.content.intro && (
          <p className="font-medium text-slate-700">{section.content.intro}</p>
        )}

        {section.content.paragraphs?.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        {section.content.subsections?.map((sub, sIdx) => (
          <div key={sIdx} className="rounded-xl bg-slate-50/70 p-4 sm:p-5 border border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800 mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              {sub.subtitle}
            </h3>
            <ul className="space-y-2.5 pl-1">
              {sub.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {section.content.callout && (
          <div
            className={`flex items-start gap-3 rounded-xl p-4 text-xs sm:text-sm ${
              section.content.callout.type === "warning"
                ? "bg-amber-50 text-amber-900 border border-amber-200/80"
                : "bg-blue-50 text-blue-900 border border-blue-200/80"
            }`}
          >
            <AlertTriangle
              className={`h-5 w-5 shrink-0 ${
                section.content.callout.type === "warning"
                  ? "text-amber-600"
                  : "text-blue-600"
              }`}
            />
            <p className="leading-snug">{section.content.callout.text}</p>
          </div>
        )}
      </div>
    </article>
  );
}
