import Home from "../components/home"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function HomePage() {
  return (
    <Home />
  )
}
