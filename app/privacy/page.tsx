"use client";

import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import PolicySearch from "@/components/PolicySearch";
import PolicySectionCard from "@/components/PolicySectionCard";
import DataDeletionModal from "@/components/DataDeletionModal";
import ContactPrivacyModal from "@/components/ContactPrivacyModal";
import { PRIVACY_SECTIONS, PRIVACY_POLICY_METADATA } from "@/lib/privacyData";
import {
  Shield,
  Printer,
  Trash2,
  Mail,
  Calendar,
  Building2,
  Sparkles,
  Lock,
  UserCheck,
  CheckCircle,
} from "lucide-react";

export default function PrivacyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSectionId, setActiveSectionId] = useState("information-we-collect");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return PRIVACY_SECTIONS;
    const term = searchTerm.toLowerCase();
    return PRIVACY_SECTIONS.filter((sec) => {
      const titleMatch = sec.title.toLowerCase().includes(term);
      const summaryMatch = sec.shortSummary.toLowerCase().includes(term);
      const introMatch = sec.content.intro?.toLowerCase().includes(term);
      const paraMatch = sec.content.paragraphs?.some((p) =>
        p.toLowerCase().includes(term)
      );
      const subMatch = sec.content.subsections?.some(
        (sub) =>
          sub.subtitle.toLowerCase().includes(term) ||
          sub.items.some((i) => i.toLowerCase().includes(term))
      );
      return titleMatch || summaryMatch || introMatch || paraMatch || subMatch;
    });
  }, [searchTerm]);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = PRIVACY_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(PRIVACY_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(PRIVACY_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      <Navbar
        onOpenDeleteModal={() => setIsDeleteModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Hero Header */}
      <section className="border-b border-slate-200/80 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-500">
            <span className="hover:text-slate-800 transition-colors">Cregen</span>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span className="font-semibold text-blue-600">Privacy Policy</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                <Shield className="h-3.5 w-3.5" />
                Official Legal Disclosure
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Cregen Privacy Policy
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Cregen (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an AI video and voice studio app
                operated by <strong>{PRIVACY_POLICY_METADATA.operatingEntity}</strong>. This policy explains what information
                we collect, how we use it, and the choices you have. By using Cregen, you agree to this policy.
              </p>
            </div>

            {/* Badges & Actions */}
            <div className="flex flex-wrap items-center gap-2.5 lg:self-center">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                <Printer className="h-3.5 w-3.5 text-slate-500" />
                Print or Save PDF
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-rose-50 px-4 py-2.5 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-200 hover:bg-rose-100 transition-all"
              >
                <Trash2 className="h-3.5 w-3.5 text-rose-600" />
                Delete Data Request
              </button>
            </div>
          </div>

          {/* Metadata bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>
                Last updated: <strong>{PRIVACY_POLICY_METADATA.lastUpdated}</strong>
              </span>
            </div>
            <div className="h-3 w-px bg-slate-200"></div>
            <div className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-slate-400" />
              <span>
                Operated by: <strong>{PRIVACY_POLICY_METADATA.companyName}</strong>
              </span>
            </div>
            <div className="h-3 w-px bg-slate-200"></div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span>
                App: <strong>Cregen (AI Video & Voice Studio)</strong>
              </span>
            </div>
            <div className="h-3 w-px bg-slate-200"></div>
            <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-600/20">
              Google Play Compliant
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sticky Sidebar (TOC) */}
            <aside className="hidden lg:block lg:col-span-4">
              <TableOfContents
                activeId={activeSectionId}
                onSelectSection={handleSelectSection}
              />
            </aside>

            {/* Right Column (Search + Sections) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Search Bar */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <PolicySearch
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  resultCount={filteredSections.length}
                />
                <span className="text-xs text-slate-400 whitespace-nowrap">
                  Showing {filteredSections.length} of {PRIVACY_SECTIONS.length} sections
                </span>
              </div>

              {/* Highlights Summary Box */}
              {!searchTerm && (
                <div className="rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 p-6 sm:p-8 text-white shadow-md">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    <Sparkles className="h-4 w-4" />
                    Key Privacy Commitments At A Glance
                  </div>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    Transparent, Ethical AI Video & Voice Generation
                  </h3>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200">
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/10 p-3.5 backdrop-blur-sm">
                      <Lock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">Zero Data Selling</strong>
                        We never sell personal data or uploaded media to third-party data brokers.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/10 p-3.5 backdrop-blur-sm">
                      <UserCheck className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">Voice & Face Consent</strong>
                        Only clone voices or likenesses that belong to you or with explicit authorization.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/10 p-3.5 backdrop-blur-sm">
                      <Trash2 className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">30-Day Permanent Deletion</strong>
                        Account deletion permanently scrubs personal data and media within 30 days.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 rounded-xl bg-white/10 p-3.5 backdrop-blur-sm">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-semibold mb-0.5">Google Play Billing</strong>
                        Subscriptions and purchases handled safely via Google Play with zero stored card details.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sections List */}
              {filteredSections.length > 0 ? (
                <div className="space-y-6">
                  {filteredSections.map((section) => (
                    <PolicySectionCard
                      key={section.id}
                      section={section}
                      isHighlighted={activeSectionId === section.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                  <Shield className="mx-auto h-12 w-12 text-slate-300" />
                  <h3 className="mt-3 text-base font-semibold text-slate-800">No matching clauses found</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Try searching for another term like &ldquo;deletion&rdquo;, &ldquo;voice&rdquo;, or &ldquo;AI&rdquo;.
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="mt-4 rounded-lg bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    Clear Filter
                  </button>
                </div>
              )}

              {/* Google Play Deletion Callout Card */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-rose-700">
                      <Trash2 className="h-3.5 w-3.5" />
                      Google Play Account Deletion Requirement
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Need to delete your Cregen account and data?
                    </h3>
                    <p className="text-xs text-slate-600 max-w-xl">
                      In compliance with Google Play Developer policies, you can trigger full deletion of your
                      Cregen account, uploaded media, AI video outputs, voice cloning profiles, and telemetry.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="shrink-0 rounded-xl bg-rose-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-rose-600/20 hover:bg-rose-700 transition-all"
                  >
                    Submit Deletion Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Modals */}
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
