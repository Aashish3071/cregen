"use client";

export default function PrivacyPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Cregen Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: November 18, 2026
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg px-3 py-1.5 transition-colors print:hidden"
          >
            Print Policy
          </button>
        </div>

        {/* Introduction */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-8 leading-relaxed">
          <p className="text-base sm:text-lg leading-relaxed text-slate-800">
            Cregen (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an AI video and voice studio app operated by{" "}
            <strong>Credstacks Technologies</strong>. This policy explains what information we collect, how we use it,
            and the choices you have. By using Cregen, you agree to this policy.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              1. Information we collect
            </h2>

            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Information you give us
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>
                  <strong>Account details:</strong> email address, username, and password or sign-in details (for example, Google sign-in).
                </li>
                <li>
                  <strong>Content you create or upload:</strong> text prompts, videos, images, audio, voice recordings, captions, and edits.
                </li>
                <li>
                  <strong>Posts and interactions:</strong> videos you publish, remixes, comments, reports, and blocks.
                </li>
                <li>
                  <strong>Messages you send us for support.</strong>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Information collected automatically
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>
                  <strong>Device information:</strong> device model, operating system, app version, language, and a device or advertising identifier.
                </li>
                <li>
                  <strong>Usage information:</strong> features you use, generation history, credits used, crashes, and performance data.
                </li>
                <li>
                  <strong>Approximate location</strong> based on your IP address. We do not collect precise GPS location.
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Payment information
              </h3>
              <p>
                Purchases and subscriptions are processed by Google Play. We do not receive or store your full card details. We receive confirmation of your purchase and your plan status.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              2. How we use your information
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>To provide the app: generate videos and voices, edit, save, and publish your content.</li>
              <li>To run features such as remixing, prompt breakdowns, search, and recommendations.</li>
              <li>To manage your account, credits, and purchases.</li>
              <li>To keep the community safe: review reports, detect abuse, and enforce our rules.</li>
              <li>To fix bugs, measure performance, and improve Cregen.</li>
              <li>To contact you about your account, support requests, and important updates.</li>
              <li>To meet legal obligations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              3. AI processing
            </h2>
            <p>
              To create and analyze content, we send your prompts, uploaded media, and related settings to AI service providers that generate video, voice, and text. They process this data only to provide the service to us, under their own terms and privacy commitments. Please do not upload content you do not have the right to use, or private information about other people.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              4. Voice and likeness
            </h2>
            <p>
              You may only upload or clone a voice or face that is your own or that you have clear permission to use. We may remove content that uses a real person&apos;s voice or likeness without consent, and we may suspend accounts that do so.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              5. Public content
            </h2>
            <p>
              Videos, prompts, and remixes you choose to publish may be visible to other users and may be remixed according to the settings you choose. Content you keep private is not shown to other users. Anything you make public may be copied or shared by others outside our control.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              6. Sharing your information
            </h2>
            <p>We do not sell your personal information. We share it only with:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>
                Service providers that host our servers, store files, process AI requests, provide analytics, and handle crash reporting (such as cloud infrastructure and AI processing partners).
              </li>
              <li>Google Play, for purchases and app distribution.</li>
              <li>Other users, only for content you choose to make public.</li>
              <li>Authorities or other parties when required by law, to protect safety, or to enforce our rules.</li>
              <li>A successor, if Cregen is part of a merger or sale.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              7. Retention
            </h2>
            <p>
              We keep your information while your account is active and as long as needed to provide the service. When you delete your account, we delete or anonymize your personal data and content within 30 days, except where we must keep some information for legal, security, or fraud-prevention reasons.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              8. Your choices and rights
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>Access and edit your account information in the app.</li>
              <li>Delete content you have posted at any time.</li>
              <li>
                Delete your account and data in the app under <strong>Settings &gt; Account &gt; Delete account</strong>, or by emailing us at{" "}
                <a href="mailto:info@credstacks.com" className="text-blue-600 underline">
                  info@credstacks.com
                </a>.
              </li>
              <li>Control permissions such as microphone, camera, and storage in your device settings.</li>
              <li>
                Depending on where you live, you may have additional rights, such as accessing, correcting, deleting, or exporting your data, or objecting to certain processing. Contact us to use them.
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              9. Children
            </h2>
            <p>
              Cregen is not intended for children under 13 (or under 16 where required by local law). We do not knowingly collect information from children below that age. If you believe a child has given us information, contact us and we will delete it.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              10. Security
            </h2>
            <p>
              We use reasonable technical and organizational measures to protect your information, such as encryption in transit and access controls. No system is completely secure, so we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              11. International transfers
            </h2>
            <p>
              Your information may be processed in countries other than your own, where data protection laws may differ. We take steps to protect it as described in this policy.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              12. Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. We will post the new version with a new &ldquo;Last updated&rdquo; date and, for significant changes, notify you in the app.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4 border-b border-slate-200 pb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-t border-slate-100 pt-6">
              13. Contact us
            </h2>
            <div className="space-y-1.5 text-slate-700">
              <p><strong>Credstacks Technologies</strong> (Operating entity for Cregen)</p>
              <p>
                Email:{" "}
                <a href="mailto:info@credstacks.com" className="text-blue-600 underline">
                  info@credstacks.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://credstacks.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  credstacks.com
                </a>
              </p>
              <p>
                Policy URL:{" "}
                <a href="https://cregen.credstacks.com/privacy" className="text-blue-600 underline">
                  https://cregen.credstacks.com/privacy
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-8 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Cregen • Operated by Credstacks Technologies • All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
