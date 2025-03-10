import Layout from "@/components/layout";
import Script from "next/script";
import { font_body, font_headings, font_style } from "@/utils/fonts";
import "@/styles/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "error";
export const dynamicParams = false;

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: "Romaric Guth",
    description: t("metaDescription"),
  };
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: { locale },
}) {
  const messages = await getMessages();

  return (
    <html
      className={`${font_body.variable} ${font_headings.variable} ${font_style.variable}`}
      lang={locale}
    >
      <head>
        <Script
          src="https://kit.fontawesome.com/cdbad67a63.js"
          crossorigin="anonymous"
        ></Script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
