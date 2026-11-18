import type { Metadata } from "next";
import "./globals.css";
import { PRIVACY_POLICY_METADATA } from "@/lib/privacyData";

export const metadata: Metadata = {
  metadataBase: new URL("https://cregen.credstacks.com"),
  title: {
    default: "Privacy Policy | Cregen - AI Video & Voice Studio",
    template: "%s | Cregen AI Studio",
  },
  description:
    "Official Cregen Privacy Policy: Comprehensive disclosure of AI video and voice synthesis, Google Play billing, biometric likeness rights, and user data choices by Credstacks.",
  keywords: [
    "Cregen Privacy Policy",
    "Cregen AI Studio",
    "AI video generator privacy",
    "Voice clone privacy",
    "Google Play privacy policy",
    "Credstacks",
  ],
  authors: [{ name: "Credstacks Technologies" }],
  creator: "Credstacks Technologies",
  publisher: "Credstacks Technologies",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRIVACY_POLICY_METADATA.canonicalUrl,
    siteName: "Cregen AI Studio",
    title: "Privacy Policy | Cregen - AI Video & Voice Studio",
    description:
      "Learn how Cregen collects, uses, and safeguards your creative prompts, media, and voice clones. Fully compliant with Google Play standards.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Cregen AI Studio",
    description:
      "Official Privacy Policy for the Cregen AI Video & Voice Studio app operated by Credstacks.",
  },
  alternates: {
    canonical: PRIVACY_POLICY_METADATA.canonicalUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
