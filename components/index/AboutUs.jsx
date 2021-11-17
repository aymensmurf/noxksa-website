import BannerRight from "../shared/BannerRight";
import BannerLeft from "../shared/BannerLeft";

import { withTranslation } from '../../i18n'

const AboutUs = ({isRTL,t}) => {
    return (
        <>
            <a name="about-us" />
            <section>
            {isRTL?
                <BannerRight  title={t('ABOUTUS.whoweare')} isRTL={isRTL}/>
                :
                <BannerLeft title={t('ABOUTUS.whoweare')} isRTL={isRTL}/>
                }

                <div className="container" style={{direction: `${isRTL ? 'rtl' : 'ltr'}`}} >
                    <div className="content">
                        <p>{t('ABOUTUS.p1')}</p>
                        <p>{t('ABOUTUS.p2')}</p>
                        <p>{t('ABOUTUS.p3')}</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                }

                .content {
                    margin-top: 110px;
                    width: 50%;
                }

                p {
                    margin-bottom: 30px;
                }

                @media only screen and (max-width: 1023px) {
                    section {
                        padding-top: 80px;
                    }

                    .content {
                        margin-top: 40px;
                        width: 100%;
                    }
                }

                @media only screen and (max-width: 610px) {
                    section {
                        padding-top: 60px;
                    }

                    .content {
                        margin-top: 20px;
                    }
                }
            `}</style>
        </>
    )
}

export default withTranslation('common')(AboutUs);

