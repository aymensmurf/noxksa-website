import Image from "next/image";
import BannerLeft from "../shared/BannerLeft";
import BannerRight from "../shared/BannerRight";

import { SERVER_URL } from "../../utils/consts";
import Link from "next/link";
import { withTranslation } from "../../i18n";

const OurClients = ({ isRTL, clients, t }) => {
	const getClickableLink = (link) => {
		return link.startsWith("http://") || link.startsWith("https://") ? link : `http://${link}`;
	};
	return (
		<>
			<a name='our-clients' />
			<section style={{ position: "relative", zIndex: 98 }}>
				{isRTL ? <BannerLeft title={t("OURCLIENTS.CLIENTS")} /> : <BannerRight title={t("OURCLIENTS.CLIENTS")} />}
				<div
					className='container flex jc-c ai-c flex-wrap'
					style={{ gap: 30, marginTop: 110, direction: `${isRTL ? "rtl" : "ltr"}` }}>
					{clients.map(({ _id, link, img }, i) => (
						<div key={_id}>
							<a href={link ? getClickableLink(link) : "#"} target='_blank' rel='noopener noreferrer'>
								<Image
									src={`${SERVER_URL}/uploads/${img}`}
									alt=''
									width={170}
									height={100}
									objectFit='contain'
									priority
								/>
							</a>
						</div>
					))}
				</div>
			</section>

			<style jsx>{`
				section {
					padding-top: 160px;
				}

				@media only screen and (max-width: 1023px) {
					section {
						padding-top: 80px;
					}
				}

				@media only screen and (max-width: 610px) {
					section {
						padding-top: 60px;
					}
				}
			`}</style>
		</>
	);
};

export default withTranslation("common")(OurClients);
