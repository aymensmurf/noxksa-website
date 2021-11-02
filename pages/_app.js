import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nox Entertainment – شركة كثيب التجارية – خدمات ترفيهية وفعاليات إبداعية</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
