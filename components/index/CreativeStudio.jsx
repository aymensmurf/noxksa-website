import BannerLeft from "../shared/BannerLeft";
import Album from "../shared/Album";
import { ALBUMS } from "../../utils/consts";
import { SERVER_URL } from '../../utils/consts';
import { withTranslation } from '../../i18n'

const CreativeStudio = ({creativeStudio,t}) => {
    return (
        <>
            <a name="creative-studio" />
            <section>
                <BannerLeft title={t('CREATIVESTUDIO.STUDIO')} />

                <div className="container" style={{ marginTop: 60 }}>
                    <div className="flex ai-c flex-wrap" style={{ gap: 30 }}>
                        {creativeStudio.map(({ title,links }, i) => (
                            <Album key={i} title={title.en} mainImg={`${SERVER_URL}/uploads/${links[parseInt(Math.random() * (links.length))].link}`} IMAGES={links}/>
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
    )
}
CreativeStudio.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
export default withTranslation('common')(CreativeStudio);
