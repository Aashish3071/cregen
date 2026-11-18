export interface PrivacySection {
  id: string;
  number: number;
  title: string;
  shortSummary: string;
  badge?: string;
  content: {
    intro?: string;
    subsections?: {
      subtitle: string;
      items: string[];
    }[];
    paragraphs?: string[];
    callout?: {
      type: "info" | "warning" | "success";
      text: string;
    };
  };
}

export const PRIVACY_POLICY_METADATA = {
  appName: "Cregen",
  tagline: "AI Video & Voice Studio",
  companyName: "Credstacks",
  operatingEntity: "Credstacks Technologies",
  canonicalUrl: "https://cregen.credstacks.com/privacy",
  domain: "cregen.credstacks.com",
  lastUpdated: "November 18, 2026",
  effectiveDate: "November 18, 2026",
  version: "1.0.0",
  contactEmail: "info@credstacks.com",
  privacyEmail: "privacy@credstacks.com",
  parentWebsite: "https://credstacks.com",
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "information-we-collect",
    number: 1,
    title: "Information we collect",
    shortSummary: "Account credentials, user-generated AI content, device metrics, and Google Play purchase tokens.",
    badge: "Core Data",
    content: {
      intro: "We collect information to provide, personalize, and improve your Cregen experience. The types of data collected are grouped as follows:",
      subsections: [
        {
          subtitle: "Information you give us",
          items: [
            "Account details: Email address, username, profile identifiers, and authentication credentials or sign-in details (e.g., Google Sign-In tokens).",
            "Content you create or upload: Text prompts, video inputs, source images, audio recordings, personal voice samples for cloning, subtitles, and timeline edits.",
            "Posts and interactions: Videos you publish to the community, remixes, comments, prompt breakdown shares, reports, and blocks.",
            "Support communications: Customer inquiries, error reports, and troubleshooting messages sent to our team."
          ]
        },
        {
          subtitle: "Information collected automatically",
          items: [
            "Device information: Device model, operating system version, app build version, system language, screen resolution, and hardware/advertising identifiers (e.g., Android Advertising ID).",
            "Usage information: Features accessed, generation frequency and history, credits balance and usage, crash dumps, and system latency metrics.",
            "Approximate location: Coarse geographical region estimated solely from your IP address. We do NOT collect real-time or precise GPS location."
          ]
        },
        {
          subtitle: "Payment information",
          items: [
            "Purchases and subscriptions are processed entirely through the Google Play In-App Billing system.",
            "We do not receive or store your raw payment card numbers, bank account numbers, or CVV.",
            "We receive cryptographically verified transaction receipts, subscription renewal statuses, and credit bundle balance confirmations."
          ]
        }
      ]
    }
  },
  {
    id: "how-we-use-information",
    number: 2,
    title: "How we use your information",
    shortSummary: "Generating AI media, managing credits, preventing abuse, and app improvements.",
    badge: "Processing",
    content: {
      paragraphs: [
        "We use the personal and technical data we collect for strictly defined operational purposes:"
      ],
      subsections: [
        {
          subtitle: "Core Purposes",
          items: [
            "To deliver core studio services: Synthesizing AI videos, generating voice clones, processing audio edits, rendering exports, and saving user media.",
            "To power collaborative features: Public remixing, interactive prompt breakdowns, community discovery, search indexing, and personalized recommendations.",
            "To administer your account: Managing credit allotments, tracking token depletion, honoring subscriptions, and verifying entitlements.",
            "To enforce trust and safety: Reviewing abuse reports, preventing automated exploitation, moderating illicit content, and upholding platform safety rules.",
            "To maintain and optimize Cregen: Diagnosing application crashes, profiling neural inference pipelines, and engineering feature enhancements.",
            "To communicate directly with you: Transmitting transactional notices, credit status alerts, customer support resolutions, and critical security advisories.",
            "To satisfy legal and regulatory mandates: Complying with applicable copyright laws, subpoenas, and accounting audits."
          ]
        }
      ]
    }
  },
  {
    id: "ai-processing",
    number: 3,
    title: "AI processing",
    shortSummary: "Transmission of prompts and media to specialized AI models under strict non-disclosure.",
    badge: "AI Safety",
    content: {
      paragraphs: [
        "To synthesize high-fidelity videos, render photorealistic avatars, and generate natural acoustic voices, Cregen transmits your prompts, source media, and style parameters to vetted AI infrastructure providers.",
        "Our AI processing partners process this data solely to execute the requested generation pipeline on our behalf, governed by strict confidentiality, data protection agreements, and enterprise privacy standards.",
        "Our partner agreements restrict these providers from utilizing your private uploaded media or proprietary prompts to train public foundation models without your authorization."
      ],
      callout: {
        type: "warning",
        text: "Please do not submit or upload media, confidential proprietary documents, or personal data belonging to third parties unless you hold lawful title or explicit written consent."
      }
    }
  },
  {
    id: "voice-and-likeness",
    number: 4,
    title: "Voice and likeness",
    shortSummary: "Strict consent requirement for face synthesis and acoustic voice cloning.",
    badge: "Ethical Standards",
    content: {
      paragraphs: [
        "Cregen is built on strict ethical biometric principles. You may only upload, clone, or synthesize a voice profile or facial likeness that belongs to you personally, or for which you have obtained explicit, verifiable written authorization from the rights holder.",
        "We maintain zero tolerance for non-consensual deepfakes, deceptive impersonations, or unauthorized voice synthesis of living or deceased individuals.",
        "We reserve the right to immediately inspect, remove, or terminate any user content, voice model, or account that infringes upon a third party's right of publicity, trademark, or biometric privacy."
      ]
    }
  },
  {
    id: "public-content",
    number: 5,
    title: "Public content",
    shortSummary: "Control over private vs. community-published videos and remix rights.",
    content: {
      paragraphs: [
        "Content Visibility Controls: Videos, audio clips, prompts, and templates that you mark as private are restricted to your authenticated account and are never surfaced in the public feed or to other users.",
        "Published Community Creations: Any creation that you voluntarily publish to the Cregen public showcase or community channels becomes accessible to other platform members and may be remixed, subject to the remixing permissions you select during export.",
        "External Duplication: Please be advised that once media is published publicly, other users may view, share, or capture such content outside of our direct technological controls."
      ]
    }
  },
  {
    id: "sharing-your-information",
    number: 6,
    title: "Sharing your information",
    shortSummary: "Zero sale of personal data; sharing limited to necessary hosting, AI, billing, and legal compliance.",
    badge: "No Data Sales",
    content: {
      intro: "We do not sell, rent, or trade your personal information. We disclose data solely to the limited categories of recipients detailed below:",
      subsections: [
        {
          subtitle: "Authorized Recipients",
          items: [
            "Infrastructure and AI Service Providers: Cloud hosting servers (e.g., AWS, Google Cloud), database storage, GPU compute clusters, neural inference API providers, telemetry, and error logging services.",
            "App Store and Billing Gateways: Google Play Store services for purchase validation, subscription status, and fraudulent transaction detection.",
            "Community Members: Other registered users, restricted exclusively to content, comments, and remixes you have explicitly published to public feeds.",
            "Legal and Safety Authorities: Law enforcement bodies, regulators, or judicial courts when legally compelled by subpoena, court order, or to prevent imminent physical harm.",
            "Corporate Successors: Relevant acquiring entities in the event of an organizational merger, acquisition, corporate restructuring, or asset transfer."
          ]
        }
      ]
    }
  },
  {
    id: "retention",
    number: 7,
    title: "Retention",
    shortSummary: "Data kept while account is active; permanent deletion within 30 days upon request.",
    content: {
      paragraphs: [
        "We retain your personal information, generation records, and uploaded assets for as long as your account remains active and in good standing, or as necessary to fulfill the operational functions outlined in this policy.",
        "Upon submission of an account deletion request, we initiate an automated purging routine. All personal identifiers, uploaded media, voice profiles, and output records are permanently purged or irreversibly anonymized within thirty (30) days.",
        "Limited residual transaction records and security logs may be retained beyond this period solely where mandated by regulatory statutes, taxation obligations, or pending fraud investigations."
      ]
    }
  },
  {
    id: "your-choices-and-rights",
    number: 8,
    title: "Your choices and rights",
    shortSummary: "In-app profile management, content deletion, and full account deletion tools.",
    badge: "User Control",
    content: {
      intro: "You hold comprehensive authority over your personal information and uploaded creations:",
      subsections: [
        {
          subtitle: "Self-Service Controls",
          items: [
            "Account Modification: Access and update your email, display name, and credentials directly within the app profile settings.",
            "Asset Deletion: Remove individual videos, voice samples, and prompt histories at any time from your studio library.",
            "Full Account Deletion: Initiate instantaneous account and data deletion directly in the app via [Settings > Account > Delete account], or by submitting a verified request to our privacy desk at privacy@credstacks.com.",
            "Device Permissions: Revoke device hardware access (microphone, camera, storage media) at any moment through your Android operating system settings."
          ]
        },
        {
          subtitle: "Statutory Jurisdictional Rights",
          items: [
            "Depending on your residence (e.g., GDPR in the EU, CCPA/CPRA in California), you may possess additional rights to access, rectify, obtain portability copies of, or restrict processing of your personal information."
          ]
        }
      ]
    }
  },
  {
    id: "children",
    number: 9,
    title: "Children's privacy",
    shortSummary: "Cregen is restricted to individuals aged 13 and above (or local legal age).",
    badge: "Age Restrictions",
    content: {
      paragraphs: [
        "Cregen is designed for and restricted to general audiences aged 13 and above (or 16 within the European Economic Area / UK).",
        "We do not knowingly collect, solicit, or maintain personal information from individuals below these minimum age thresholds.",
        "If we discover that an individual under the age threshold has submitted personal information, we will immediately purge the associated account and content. Parents or guardians who believe a child has submitted data may contact us at privacy@credstacks.com for expedited removal."
      ]
    }
  },
  {
    id: "security",
    number: 10,
    title: "Security",
    shortSummary: "Industry-standard cryptographic encryption in transit and rest with access segmentation.",
    content: {
      paragraphs: [
        "We employ comprehensive technical and organizational safeguards to shield your data against unauthorized interception, destruction, alteration, or disclosure.",
        "These measures encompass TLS 1.3 encryption in transit, AES-256 cryptographic storage at rest, strict least-privilege administrative access protocols, and continual security monitoring.",
        "While we apply rigorous safeguards, no digital infrastructure can be guaranteed as entirely immune to compromise; users are encouraged to maintain unique credentials and safeguard their devices."
      ]
    }
  },
  {
    id: "international-transfers",
    number: 11,
    title: "International transfers",
    shortSummary: "Global cloud processing protected via standard contractual clauses.",
    content: {
      paragraphs: [
        "Because Cregen leverages globally distributed cloud infrastructure and AI compute clusters, your personal data and generation inputs may be routed and processed across servers situated outside your country of residence.",
        "When data crosses international borders, we ensure adequate cross-border transfer mechanisms, such as Standard Contractual Clauses (SCCs) and adherence to prevailing data protection frameworks."
      ]
    }
  },
  {
    id: "changes-to-policy",
    number: 12,
    title: "Changes to this policy",
    shortSummary: "Notification of substantial changes via in-app banner and updated revision timestamp.",
    content: {
      paragraphs: [
        "We periodically evaluate and update this Privacy Policy to reflect advancements in our generative AI capabilities, operational adjustments, and evolving legal standards.",
        "Whenever modifications are published, we revise the 'Last updated' timestamp at the top of this document.",
        "For material modifications affecting your privacy rights, we provide conspicuous advance notice through in-app notifications or registered email dispatches prior to the effective date."
      ]
    }
  },
  {
    id: "contact-us",
    number: 13,
    title: "Contact us",
    shortSummary: "Official support and privacy channels for Credstacks and Cregen.",
    badge: "Direct Contact",
    content: {
      paragraphs: [
        "For questions, data subject requests, or compliance inquiries regarding this Privacy Policy or Cregen's AI processing practices, please reach our Data Protection Team:"
      ],
      subsections: [
        {
          subtitle: "Official Contact Coordinates",
          items: [
            "Operating Entity: Credstacks Technologies (Cregen Project)",
            "Privacy & DPO Email: privacy@credstacks.com",
            "General Support Email: info@credstacks.com",
            "Platform URL: https://cregen.credstacks.com",
            "Parent Corporate Website: https://credstacks.com"
          ]
        }
      ]
    }
  }
];
