import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.phone !== "string" ||
    typeof body.details !== "string" ||
    !body.name.trim() ||
    !body.phone.trim() ||
    !body.details.trim()
  ) {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  // Quote requests currently just land in the server log. Wire this up to an
  // email provider (e.g. Resend) or a WhatsApp/SMS API once credentials exist.
  console.log("New quote request:", body);

  return NextResponse.json({ ok: true });
}
