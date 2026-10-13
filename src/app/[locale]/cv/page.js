import { Suspense } from "react";
import CvPageClient from "@/components/cv/cvPageClient";

export const metadata = {
  title: "Romaric Gut | CV",
  description: "Resume of Romaric Gut, Software Engineer.",
};

const printStyles = `
  @media print {
    body > header, body > footer { display: none !important; }
    .cv-controls { display: none !important; }
    .cv-screen { padding: 0 !important; background: white !important; min-height: 0 !important; }
    .cv-document { box-shadow: none !important; }
  }
  @page { size: A4; margin: 0; }
`;

export default function CvPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />
      <Suspense>
        <CvPageClient />
      </Suspense>
    </>
  );
}
