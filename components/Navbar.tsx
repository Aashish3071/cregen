"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Video, Trash2, Mail, ExternalLink, Menu, X } from "lucide-react";
import { PRIVACY_POLICY_METADATA } from "@/lib/privacyData";

interface NavbarProps {
  onOpenDeleteModal?: () => void;
  onOpenContactModal?: () => void;
}

export default function Navbar({ onOpenDeleteModal, onOpenContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-105">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  {PRIVACY_POLICY_METADATA.appName}
                </span>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  AI Studio
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">by Credstacks</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link
            href="/privacy"
            className="flex items-center gap-1.5 text-blue-600 transition-colors hover:text-blue-700 font-semibold"
          >
            <ShieldCheck className="h-4 w-4" />
            Privacy Policy
          </Link>
          <a
            href={PRIVACY_POLICY_METADATA.parentWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-600 transition-colors hover:text-slate-900"
          >
            Credstacks CRM
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenContactModal && (
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
            >
              <Mail className="h-3.5 w-3.5 text-slate-500" />
              Contact Privacy Team
            </button>
          )}

          {onOpenDeleteModal && (
            <button
              onClick={onOpenDeleteModal}
              className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 px-3.5 py-2 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-600/20 transition-all hover:bg-rose-100"
            >
              <Trash2 className="h-3.5 w-3.5 text-rose-600" />
              Request Data Deletion
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
            >
              <ShieldCheck className="h-4 w-4" />
              Privacy Policy
            </Link>
            <a
              href={PRIVACY_POLICY_METADATA.parentWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Credstacks Parent Platform
              <ExternalLink className="h-4 w-4 text-slate-400" />
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              {onOpenContactModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Mail className="h-4 w-4" />
                  Contact Privacy Desk
                </button>
              )}
              {onOpenDeleteModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDeleteModal();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-200"
                >
                  <Trash2 className="h-4 w-4" />
                  Request Account Deletion (Google Play)
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
