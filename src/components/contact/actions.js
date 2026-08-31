"use server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_TO = process.env.CONTACT_TO || "contact@romaricguth.com";
const CONTACT_FROM = process.env.CONTACT_FROM || "contact@romaricguth.com";

export async function sendContactMessage(prevState, formData) {
  // Honeypot: bots fill hidden fields. Pretend success and drop silently.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const subject = (formData.get("subject") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  const errors = {};
  if (!name) errors.name = "errorRequired";
  if (!email) errors.email = "errorRequired";
  else if (!EMAIL_RE.test(email)) errors.email = "errorEmail";
  if (!message) errors.message = "errorRequired";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values: { name, email, subject, message } };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set");
    return { status: "error", errors: { form: "errorGeneric" } };
  }

  // Strip line breaks before they reach headers/sender fields.
  const cleanName = name.replace(/[\r\n]+/g, " ").slice(0, 100);
  const cleanSubject = (subject || `New message from ${cleanName}`)
    .replace(/[\r\n]+/g, " ")
    .slice(0, 200);

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Portfolio", email: CONTACT_FROM },
        to: [{ email: CONTACT_TO }],
        replyTo: { email, name: cleanName },
        subject: `[Portfolio] ${cleanSubject}`,
        textContent: `Name: ${name}\nEmail: ${email}\nSubject: ${cleanSubject}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      console.error("Brevo error:", res.status, await res.text());
      return { status: "error", errors: { form: "errorGeneric" } };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form error:", err);
    return { status: "error", errors: { form: "errorGeneric" } };
  }
}
