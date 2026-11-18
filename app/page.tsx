"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataDeletionModal from "@/components/DataDeletionModal";
import ContactPrivacyModal from "@/components/ContactPrivacyModal";
import { PRIVACY_POLICY_METADATA } from "@/lib/privacyData";
import {
  Video,
  Mic,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Lock,
  Layers,
  Trash2,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        onOpenDeleteModal={() => setIsDeleteModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50/80 via-white to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Next-Gen AI Media Generation by Credstacks
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            AI Video and Voice Studio for Visionary Creators
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create cinema-grade video, synthesize photorealistic avatars, and clone natural voices with
            uncompromising biometric privacy and creator rights.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all"
            >
              <ShieldCheck className="h-4 w-4" />
              Read Privacy Policy
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              onClick={() => setIsDeleteModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <Trash2 className="h-4 w-4 text-rose-500" />
              Request Data Deletion
            </button>
          </div>

          {/* Compliance notice badge */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-emerald-500" />
              End-to-End Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-500" />
              Google Play Verified Policy
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              Ethical Voice Cloning
            </span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Studio Capabilities
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
              Built for speed, expression, and absolute privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:border-blue-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Neural Video Synthesis</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Transform natural text prompts into stunning 4K video clips, dynamic camera pans, and
                character animations in seconds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:border-blue-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Consensual Voice Cloning</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Clone and customize your own voice with strict acoustic consent verification. Generate multilingual
                dialogue effortlessly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm hover:border-blue-300 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-6">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Prompt Remix & Breakdown</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Inspect public community prompts, remix parameter seeds, and collaborate while keeping private
                assets 100% confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance / Subdomain banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Official Credstacks Subdomain
              </span>
              <h3 className="text-2xl font-bold">
                Cregen Privacy Policy & Data Management Portal
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                This portal is hosted under <strong>cregen.credstacks.com</strong> to serve mobile app store verification,
                Google Play policy compliance, and automated data subject deletion requests.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/privacy"
                className="rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white hover:bg-blue-700 transition-all text-center"
              >
                Go to /privacy
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-xs font-bold text-slate-200 hover:bg-slate-700 transition-all text-center"
              >
                Contact Legal Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <DataDeletionModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />

      <ContactPrivacyModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
