import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const ticketId = `PRIV-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Your inquiry has been received by the Cregen Data Protection team at Credstacks. We will respond within 48 business hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to process inquiry payload." },
      { status: 400 }
    );
  }
}
