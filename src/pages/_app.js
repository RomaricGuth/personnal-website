import Layout from '@/components/layout'
import '@/styles/globals.css'
import '@/styles/styles.css'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App);