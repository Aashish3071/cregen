"use client";

import { useState } from "react";
import { X, Mail, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { PRIVACY_POLICY_METADATA } from "@/lib/privacyData";

interface ContactPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPrivacyModal({ isOpen, onClose }: ContactPrivacyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Privacy Inquiry");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to transmit message.");
      setSuccessResult(data);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to send message. Please email privacy@credstacks.com directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSuccessResult(null);
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-900/10">
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {successResult ? (
          <div className="text-center py-4 space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-8 ring-blue-50/50">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Inquiry Transmitted</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {successResult.message}
            </p>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-left text-xs font-mono text-slate-700">
              <p>Case Reference: <strong className="text-blue-600">{successResult.ticketId}</strong></p>
              <p>Email: {email}</p>
            </div>
            <button
              onClick={handleReset}
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Contact Cregen Privacy Officer
                </h3>
                <p className="text-xs text-slate-500">Credstacks Technologies Legal Desk</p>
              </div>
            </div>

            {errorMsg && (
              <div className="mt-3 rounded-lg bg-rose-50 p-3 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject / Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white"
                >
                  <option value="General Privacy Inquiry">General Privacy Inquiry</option>
                  <option value="Voice & Likeness Authorization">Voice & Likeness Rights</option>
                  <option value="AI Processing Verification">AI Processing Verification</option>
                  <option value="Data Portability Request">Data Portability (GDPR/CCPA)</option>
                  <option value="Other">Other Compliance Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Detailed Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide context regarding your request or concern..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-1/2 rounded-xl border border-slate-200 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-1/2 rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-blue-600/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
