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

  const lang = searchParams.get("lang") === "fr" ? "fr" : "en";
  const query = params.toString();
  const target = `${origin}/${lang}/cv${query ? `?${query}` : ""}`;

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(target, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    // A4 printable height in CSS px at 96 DPI (29.7cm). Scale the document down
    // if it is taller, so the whole CV fits on exactly one page.
    const A4_HEIGHT_PX = 1122.5;
    const contentHeight = await page.evaluate(() => {
      const el = document.querySelector(".cv-document");
      return el ? el.getBoundingClientRect().height : null;
    });
    const scale =
      contentHeight && contentHeight > A4_HEIGHT_PX + 2
        ? Math.max(0.1, A4_HEIGHT_PX / contentHeight)
        : 1;

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      scale,
      pageRanges: "1",
    });

    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Romaric_Guth_CV_${lang}.pdf"`,
      },
    });
  } finally {
    await browser.close();
  }
}
