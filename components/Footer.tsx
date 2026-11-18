import Link from "next/link";
import { Shield, Lock, FileText, ExternalLink, Heart } from "lucide-react";
import { PRIVACY_POLICY_METADATA } from "@/lib/privacyData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
                C
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PRIVACY_POLICY_METADATA.appName}
              </span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                v{PRIVACY_POLICY_METADATA.version}
              </span>
            </div>
            <p className="max-w-md text-sm text-slate-400 leading-relaxed">
              Cregen is a state-of-the-art AI video and voice studio app engineered by Credstacks Technologies. 
              We prioritize user biometric privacy, lawful voice synthesis, and total transparency.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-emerald-400" />
                TLS 1.3 Encrypted
              </span>
              <span className="inline-flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-blue-400" />
                Google Play Verified
              </span>
            </div>
          </div>

          {/* Quick Legal Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Compliance & Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-slate-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={`${PRIVACY_POLICY_METADATA.parentWebsite}/terms`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Terms of Service
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRIVACY_POLICY_METADATA.privacyEmail}`}
                  className="hover:text-white transition-colors"
                >
                  Data Protection Officer
                </a>
              </li>
            </ul>
          </div>

          {/* Operations & Domain */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Infrastructure
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <span className="text-slate-300 font-medium">Subdomain:</span>{" "}
                <span className="text-blue-400 font-mono text-xs">{PRIVACY_POLICY_METADATA.domain}</span>
              </li>
              <li>
                <span className="text-slate-300 font-medium">Operated by:</span>{" "}
                {PRIVACY_POLICY_METADATA.companyName}
              </li>
              <li>
                <a
                  href={PRIVACY_POLICY_METADATA.parentWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  credstacks.com
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {PRIVACY_POLICY_METADATA.operatingEntity}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with privacy-first architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
