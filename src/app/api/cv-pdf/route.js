import { chromium } from "playwright";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);

  const params = new URLSearchParams();
  for (const key of ["position", "email", "phone"]) {
    const value = searchParams.get(key);
    if (value) params.set(key, value);
  }

  const query = params.toString();
  const target = `${origin}/en/cv${query ? `?${query}` : ""}`;

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(target, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });
    const pdf = await page.pdf({ format: "A4", printBackground: true });

    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Romaric_Guth_CV.pdf"',
      },
    });
  } finally {
    await browser.close();
  }
}
