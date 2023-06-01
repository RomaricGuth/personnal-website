import Layout from '@/components/layout'
import Script from 'next/script';
import { font_body, font_headings, font_style } from '@/utils/fonts';
import '@/styles/globals.css'

export const metadata = {
  title: 'Romaric Guth',
  description: 'Discover my services and experience',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: {
    lng
  }
}) {
  return (
    <html className={`${font_body.variable} ${font_headings.variable} ${font_style.variable}`}>
      <head>
        <Script src="https://kit.fontawesome.com/cdbad67a63.js" crossorigin="anonymous"></Script>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
