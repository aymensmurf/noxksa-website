import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { i18n, withTranslation } from "../../i18n";

const Home = ({ isRTL, t }) => {
	const [index, setIndex] = useState(0);
	const WORDS = isRTL ? ["الحفلات", "البرامج", "الخدمات"] : ["Services", "Programs", "Events"];

	useEffect(() => {
		const interval = setInterval(() => {
			if (index > WORDS.length - 2) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [index]);

	return (
		<>
			<section className='flex ai-c'>
				<video className='video' preload='true' autoPlay muted>
					<source src='/videos/home.mp4' type='video/mp4' />
				</video>

				<div className='home-text-container' style={{ direction: `${isRTL ? "rtl" : "ltr"}` }}>
					<h1>
						<span>{t("HOME.Most")}</span>
						<br />
						{isRTL ? (
							<div>
								<span className='word-animation' style={{ color: "rgb(245, 6, 108)" }}>
									{WORDS[index]}
								</span>
								<br />
								<span style={{ color: "white" }}>{t("HOME.Enter")}</span>
								<br />
							</div>
						) : (
							<div>
								<span>{t("HOME.Enter")}</span>
								<br />
								<span className='word-animation'>{WORDS[index]}</span>
								<br />
							</div>
						)}

						<span>{t("HOME.All")}</span>
						<br />
					</h1>
				</div>
			</section>

			<style jsx>{`
				section {
					background-color: #46356a;
					position: relative;
					width: 100vw;
					height: 100vh;
				}

				video {
					position: absolute;
					top: 0;
					right: 0;
					width: 100vw;
					height: 100vh;
					z-index: 1;
					object-fit: cover;
				}

				.home-text-container {
					z-index: 2;
					margin-left: 50%;
				}

				h1 {
					color: #fff;
					font-size: 80px;
					line-height: 90px;
					font-weight: 700;
					font-family: "CoHeadline", sans-serif;
				}

				h1 span:nth-child(3) {
					color: ${isRTL ? "white" : "rgb(245, 6, 108)"};
				}

				h1 span:nth-child(5) {
					color: rgb(254, 198, 129);
				}

				@media only screen and (max-width: 1382px) {
					h1 {
						font-size: 58px;
						line-height: 68px;
					}
				}

				@media only screen and (max-width: 1023px) {
					h1 {
						font-size: 48px;
						line-height: 56px;
					}
				}

				@media only screen and (max-width: 796px) {
					.home-text-container {
						margin-top: 120px;
						margin-left: 45%;
					}

					h1 {
						font-size: 42px;
						line-height: 48px;
					}
				}

				@media only screen and (max-width: 650px) {
					.home-text-container {
						margin-top: 120px;
						margin-left: 40%;
					}

					h1 {
						font-size: 38px;
						line-height: 46px;
					}
				}

				@media only screen and (max-width: 520px) {
					.home-text-container {
						margin-top: 120px;
						margin-left: 35%;
					}

					h1 {
						font-size: 36px;
						line-height: 46px;
					}
				}

				@media only screen and (max-width: 456px) {
					.home-text-container {
						margin-top: 120px;
						margin-left: 32%;
					}

					h1 {
						font-size: 30px;
						line-height: 38px;
					}
				}

				@media only screen and (max-width: 376px) {
					.home-text-container {
						margin-top: 120px;
						margin-left: 28%;
					}

					h1 {
						font-size: 28px;
						line-height: 38px;
					}
				}
			`}</style>
		</>
	);
};
Home.getInitialProps = async () => ({
	namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
