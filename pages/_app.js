import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
import { appWithTranslation } from '../i18n'
import App from 'next/app'


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

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);
