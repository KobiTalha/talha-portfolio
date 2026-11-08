import { NextResponse } from "next/server";

// Formspree form that delivers submissions to the site owner's inbox.
// The form ID is a public identifier (it appears in the form endpoint URL),
// not a credential.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnppykjg";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function errorResponse(code: string, message: string, status: number) {
  return NextResponse.json({ ok: false, error: { code, message } }, { status });
}

/**
 * Contact endpoint. Validates the JSON payload, then forwards it to
 * Formspree, which delivers it to the owner's email inbox.
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

  let delivery: Response;
  try {
    delivery = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio contact from ${name}`,
      }),
    });
  } catch {
    return errorResponse(
      "delivery_failed",
      "Could not deliver your message right now. Please email me directly.",
      502,
    );
  }

  if (!delivery.ok) {
    return errorResponse(
      "delivery_failed",
      "Could not deliver your message right now. Please email me directly.",
      502,
    );
  }

  return NextResponse.json({
    ok: true,
    receivedAt: new Date().toISOString(),
    message:
      "Thanks for reaching out — your message was delivered to my inbox. I usually reply within a day.",
  });
}
