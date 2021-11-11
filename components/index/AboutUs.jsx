import BannerRight from "../shared/BannerRight";
import { withTranslation } from '../../i18n'

const AboutUs = ({t}) => {
    return (
        <>
            <a name="about-us" />
            <section>
                <BannerRight title={t('ABOUTUS.whoweare')} />

                <div className="container">
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
AboutUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  

export default withTranslation('common')(AboutUs);

