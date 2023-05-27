import Layout from '@/components/layout'
import { dir } from 'i18next'
import { languages } from '../../utils/translation/config';
import Provider from '@/components/context';
import Script from 'next/script';
import { font_body, font_headings, font_style } from '@/utils/fonts';
import '@/styles/globals.css'

export const metadata = {
  title: 'Romaric Guth',
  description: 'Discover my services and experience',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}))
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: {
    lng
  }
}) {
  console.log('layout ' + lng)
  return (
    <html lang={lng} dir={dir(lng)} className={`${font_body.variable} ${font_headings.variable} ${font_style.variable}`}>
      <head>
        <Script src="https://kit.fontawesome.com/cdbad67a63.js" crossorigin="anonymous"></Script>
      </head>
      <body>
        <Provider lng={lng}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
