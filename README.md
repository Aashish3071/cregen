# Cregen — AI Video & Voice Studio

Official web portal and compliance platform for **Cregen** (AI Video and Voice Studio app) operated by **Credstacks Technologies**.

Live Subdomain URL: [https://cregen.credstacks.com/privacy](https://cregen.credstacks.com/privacy)

---

## 🚀 Overview

Cregen is a generative AI mobile and web studio application for synthesizing photorealistic video, acoustic voice cloning, and interactive prompt remixing.

This repository powers:
1. **The Privacy Policy Document (`/privacy`)**: Full compliance with the Google Play Store Developer Policy, GDPR, and CCPA/CPRA, including disclosures on third-party neural model inference, biometric voice cloning consent, 30-day retention policies, and Google Play in-app purchase receipts.
2. **Account & Data Deletion Portal (`/api/compliance/delete-request`)**: Satisfies Google Play's mandatory requirement providing users with an external web path to request deletion of their account and media assets.
3. **Data Protection Inquiries (`/api/contact`)**: In-app and web inquiries routed directly to Credstacks legal and DPO desks.
4. **App Portal (`/`)**: Overview of Cregen capabilities and legal disclosures.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting & Infrastructure**: Vercel / Node.js
- **Subdomain Routing**: `cregen.credstacks.com`

---

## 🌐 Subdomain & DNS Configuration

To point `https://cregen.credstacks.com` to this project:

### Step 1: Link in Vercel
1. In your [Vercel Dashboard](https://vercel.com), select the `cregen` project.
2. Navigate to **Settings** > **Domains**.
3. Add `cregen.credstacks.com` and select "Add".

### Step 2: Configure DNS in your Domain Registrar (or Cloudflare / Vercel DNS for `credstacks.com`)
Add the following DNS record:
- **Type**: `CNAME`
- **Name / Host**: `cregen`
- **Value / Target**: `cname.vercel-dns.com`
- **TTL**: Auto or 3600

Once propagated, Vercel will automatically provision an SSL certificate for `https://cregen.credstacks.com` with HTTPS enabled.

---

## 📱 Google Play Console Submission Guide

When submitting Cregen to the Google Play Console:
1. In the Google Play Console sidebar, go to **Policy and programs** > **App content**.
2. Under **Privacy Policy**, paste:
   ```
   https://cregen.credstacks.com/privacy
   ```
3. Under **Data safety** > **Account deletion URL**, paste:
   ```
   https://cregen.credstacks.com/privacy#your-choices-and-rights
   ```
   (Users can submit an automated deletion request via the web form button on this page).

---

## 💻 Local Development

```bash
# Clone repository
git clone https://github.com/Aashish3071/cregen.git
cd cregen

# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:3000 in your browser
```

---

## 🔒 Legal & Operator Details

- **App Name**: Cregen (AI Video & Voice Studio)
- **Operating Entity**: Credstacks Technologies
- **Parent Platform**: [credstacks.com](https://credstacks.com)
- **Contact Email**: `info@credstacks.com`
- **Privacy Officer**: `privacy@credstacks.com`
