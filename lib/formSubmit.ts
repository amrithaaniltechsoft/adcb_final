export const ENQUIRY_EMAIL = "adcbedtech@gmail.com";

function labelize(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

export async function submitEnquiryEmail(
  subject: string,
  fields: Record<string, string>
): Promise<void> {
  const payload: Record<string, string> = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
  };
  for (const [key, value] of Object.entries(fields)) {
    if (value) payload[labelize(key)] = value;
  }

  const res = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Enquiry submission failed (${res.status})`);
  }
}
