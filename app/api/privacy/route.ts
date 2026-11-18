import { NextResponse } from "next/server";
import { PRIVACY_SECTIONS, PRIVACY_POLICY_METADATA } from "@/lib/privacyData";

export async function GET() {
  return NextResponse.json({
    status: "success",
    metadata: PRIVACY_POLICY_METADATA,
    sectionsCount: PRIVACY_SECTIONS.length,
    sections: PRIVACY_SECTIONS,
  });
}
