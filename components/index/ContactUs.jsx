import Image from 'next/image'
import BannerRight from '../shared/BannerRight'
import BannerLeft from '../shared/BannerLeft'
import { withTranslation } from '../../i18n'

const ContactUs = ({isRTL,t}) => {
    return (
        <>
            <a name="contact-us" />
            <section>
                {isRTL?
                <BannerLeft title={t('CONTACTUS.contactus')} />

                :
                <BannerRight title={t('CONTACTUS.contactus')} />

                }

                <div className="container" style={{ marginTop: 60,direction: `${isRTL ? 'rtl' : 'ltr'}`}}>
                    <div className="grid">
                        <div>
                            <iframe src="https://maps.google.com/maps?q=Technology%20Fundamentals%20Trading%20Company&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near" />
                        </div>

                        <div className="flex jc-sb flex-wrap" style={{ marginTop: 0, gap: 60 }}>
                            <div>
                                <h3>{t('CONTACTUS.contactus')}:</h3>
                                <div className="flex ai-c">
                                    <Icon src="/img/icons/wa.png" alt="Whatsapp" />
                                    <p>+966 55 444 3450</p>
                                </div>
                                <div className="flex ai-c">
                                    <Icon src="/img/icons/phone.png" alt="Phone" />
                                    <p>920033680</p>
                                </div>
                            </div>
                            <div>
                                <h3>{t('CONTACTUS.followus')}:</h3>
                                <div className="flex ai-c">
                                    <a href="https://twitter.com/NoxKsa" target="_blank" rel="noopener noreferrer"><Icon src="/img/icons/tw.png" alt="Twitter" /></a>
                                    <a href="https://twitter.com/NoxKsa" target="_blank" rel="noopener noreferrer"><p>@NoxKsa</p></a>
                                </div>
                                <div className="flex ai-c">
                                    <a href="https://www.facebook.com/nox.ksa" target="_blank" rel="noopener noreferrer"><Icon src="/img/icons/fb.png" alt="Phone" /></a>
                                    <a href="https://www.instagram.com/nox.ksa" target="_blank" rel="noopener noreferrer"><Icon src="/img/icons/in.png" alt="Phone" /></a>
                                    <p>@Nox.Ksa</p>
                                </div>
                            </div>
                            <div>
                                <h3>{t('CONTACTUS.office')}:</h3>
                                <p>Near Red Fox in 7th Deam Almasif, Riyadh 12647</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }

                iframe {
                    border: none;
                    width: 100%;
                    height: 100%;
                }

                h3 {
                    color: #632166;
                    font-weight: 500;
                    font-size: 1.75rem;
                }

                p {
                    color: #463568;
                    font-size: 22px;
                }

                .flex {
                    margin-top: 15px;
                    gap: 15px;
                }

                @media only screen and (max-width: 1023px) {
                    section {
                        padding-top: 100px;
                    }
                }

                @media only screen and (max-width: 810px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }

                    iframe {
                        height: 400px;
                    }
                }
            `}</style>
        </>
    )
}

const Icon = ({ src, alt }) => (
    <>
        <Image className="icon" src={src} alt={alt} width={40} height={40} objectFit="contain" />
    </>
)

ContactUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
export default withTranslation('common')(ContactUs);
