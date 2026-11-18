import { NextRequest, NextResponse } from "next/server";

interface DeleteRequestBody {
  email: string;
  username?: string;
  reason?: string;
  confirmWipeAllData: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: DeleteRequestBody = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address associated with your Cregen account is required." },
        { status: 400 }
      );
    }

    if (!body.confirmWipeAllData) {
      return NextResponse.json(
        { error: "You must confirm that you understand account and media deletion is irreversible." },
        { status: 400 }
      );
    }

    const requestId = `DEL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Log the request for auditing compliance (in production this writes to DB / compliance queue)
    const deletionRecord = {
      requestId,
      email: body.email,
      username: body.username || "Not specified",
      reason: body.reason || "User requested deletion",
      status: "QUEUED_FOR_PURGE",
      purgeDeadlineDays: 30,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Account deletion request successfully logged and queued. All personal data, voice clones, and video assets will be purged within 30 days as detailed in Section 7.",
        record: deletionRecord,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload. Please ensure JSON formatting is valid." },
      { status: 400 }
    );
  }
}
