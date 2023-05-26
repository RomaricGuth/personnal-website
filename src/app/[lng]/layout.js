import Layout from '@/components/layout'
import '@/styles/globals.css'
import { dir } from 'i18next'
import { languages } from '../../utils/translation/config';
import Provider from '@/components/context';
import Script from 'next/script';
import { Roboto, Montserrat } from 'next/font/google';

export const metadata = {
  title: 'Romaric Guth',
  description: 'Discover my services and experience',
};

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '500',
  display: 'swap',
});

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
    <html lang={lng} dir={dir(lng)}>
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
