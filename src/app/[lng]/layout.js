import Layout from '@/components/layout'
import '@/styles/globals.css'
import { dir } from 'i18next'
import { languages } from '../translation/config';
import Provider from '@/components/context';

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
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Provider lng={lng}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
