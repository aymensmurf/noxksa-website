import BannerLeft from "../shared/BannerLeft";
import BannerRight from "../shared/BannerRight";

import Album from "../shared/Album";
import { ALBUMS } from "../../utils/consts";
import { SERVER_URL } from "../../utils/consts";
import { withTranslation } from "../../i18n";

const CreativeStudio = ({ isRTL, creativeStudio, t }) => {
	return (
		<>
			<a name='creative-studio' />
			<section>
				{isRTL ? <BannerLeft title={t("CREATIVESTUDIO.STUDIO")} /> : <BannerRight title={t("CREATIVESTUDIO.STUDIO")} />}
				<div className='container' style={{ marginTop: 60, direction: `${isRTL ? "rtl" : "ltr"}` }}>
					<div className='flex ai-c flex-wrap' style={{ gap: 30 }}>
						{creativeStudio.map(({ _id, title, links }, i) => (
							<Album
								key={i}
								title={isRTL ? title.ar : title.en}
								mainImg={`${SERVER_URL}/uploads/${links[parseInt(Math.random() * (links.length - 1))].link}`}
								id={_id}
							/>
						))}
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					padding-top: 160px;
					padding-bottom: 160px;
				}
			`}</style>
		</>
	);
};

export default withTranslation("common")(CreativeStudio);
