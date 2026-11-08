import { NextResponse } from "next/server";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function errorResponse(code: string, message: string, status: number) {
  return NextResponse.json({ ok: false, error: { code, message } }, { status });
}

/**
 * Contact endpoint. Validates the JSON payload and acknowledges receipt.
 * Delivery is intentionally out of scope for the static deployment; the
 * handler is structured so a mail provider can be dropped in later.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return errorResponse("invalid_json", "Request body must be valid JSON.", 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return errorResponse("missing_fields", "Name, email and message are all required.", 422);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse("invalid_email", "Please provide a valid email address.", 422);
  }
  if (message.length > 4000) {
    return errorResponse("message_too_long", "Message must be under 4000 characters.", 422);
  }

  return NextResponse.json({
    ok: true,
    receivedAt: new Date().toISOString(),
    message:
      "Thanks for reaching out — your message was received. For anything urgent, email is fastest.",
  });
}
