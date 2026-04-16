// ─────────────────────────────────────────────────────────────────
// Paste your Google Apps Script Web App URL below after deploying.
// See google-apps-script.js in the project root for setup instructions.
// ─────────────────────────────────────────────────────────────────
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL;

type CoachingPayload = {
  type: 'coaching';
  name: string;
  email: string;
  phone: string;
  message: string;
};

type WorkshopPayload = {
  type: 'workshop';
  name: string;
  email: string;
  phone: string;
  company: string;
  datetime: string;
  message: string;
};

type KeynotePayload = {
  type: 'keynote';
  name: string;
  email: string;
  phone: string;
  company: string;
  datetime: string;
  message: string;
};

type GuestPayload = {
  type: 'guest';
  name: string;
  email: string;
  industry: string;
  reason: string;
  phone: string;
  company: string;
  weburl: string;
};

type DiscoveryPayload = {
  type: 'discovery';
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type NewsletterPayload = {
  type: 'newsletter';
  email: string;
};

type Payload = CoachingPayload | WorkshopPayload | KeynotePayload | GuestPayload | DiscoveryPayload | NewsletterPayload;


export async function submitToSheets(payload: Payload): Promise<void> {
  // mode: 'no-cors' is required because Google Apps Script doesn't return
  // CORS headers. The request still reaches the server and writes to the sheet —
  // we just can't read the response, so we treat submission as optimistically successful.
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL;
  if (!url) throw new Error('NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT_URL is not set');
  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
