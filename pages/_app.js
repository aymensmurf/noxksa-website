import Head from "next/head";
import Script from "next/script";
import App from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { appWithTranslation } from "../i18n";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Nox Entertainment – شركة كثيب التجارية – خدمات ترفيهية وفعاليات إبداعية</title>
			</Head>

			<Component {...pageProps} />

			<Script src='https://www.googletagmanager.com/gtag/js?id=UA-225237314-1'></Script>
			<Script id='UA-225237314-1'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'UA-225237314-1');
				`}
			</Script>
		</>
	);
}

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
