"use client";

import { useState } from "react";
import { X, Trash2, AlertCircle, CheckCircle2, Loader2, ShieldAlert } from "lucide-react";
import { PRIVACY_POLICY_METADATA } from "@/lib/privacyData";

interface DataDeletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DataDeletionModal({ isOpen, onClose }: DataDeletionModalProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/compliance/delete-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          reason,
          confirmWipeAllData: confirmed,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSuccessResult(data);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred. Please contact support.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setEmail("");
    setUsername("");
    setReason("");
    setConfirmed(false);
    setSuccessResult(null);
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-900/10">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {successResult ? (
          <div className="text-center py-4 space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Deletion Request Received</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your request has been queued. Under Section 7 of the Cregen Privacy Policy, all your
              account records, uploaded media, prompts, and voice models will be permanently
              purged within <strong>30 days</strong>.
            </p>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-left text-xs font-mono text-slate-700">
              <p>Reference Ticket: <strong className="text-blue-600">{successResult.record?.requestId}</strong></p>
              <p>Account Email: {successResult.record?.email}</p>
              <p>Status: {successResult.record?.status}</p>
            </div>
            <button
              onClick={handleReset}
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-200">
                <Trash2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Request Account & Data Deletion
                </h3>
                <p className="text-xs text-slate-500">Google Play Store & GDPR Compliance Flow</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-amber-50 p-3.5 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
              <ShieldAlert className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                This request will permanently queue the deletion of your account, generated videos,
                acoustic voice clones, prompt histories, and stored tokens within 30 days.
              </p>
            </div>

            {errorMsg && (
              <div className="mt-3 rounded-lg bg-rose-50 p-3 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Registered Account Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Cregen Username (Optional)
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="@yourcreatorname"
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  rows={2}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Tell us why you are deleting your account..."
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="confirmWipe"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                />
                <label htmlFor="confirmWipe" className="text-xs text-slate-600">
                  I confirm that I want to irrevocably erase my Cregen account data and any active
                  credits.
                </label>
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
                  disabled={loading || !confirmed}
                  className="w-1/2 rounded-xl bg-rose-600 py-2.5 text-xs font-semibold text-white hover:bg-rose-700 disabled:opacity-50 transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-rose-600/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm Deletion"
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
