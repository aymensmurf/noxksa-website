import BannerRight from "../shared/BannerRight";
import BannerLeft from "../shared/BannerLeft";

import ImageLeft from "../shared/ImageLeft";
import ImageRight from "../shared/ImageRight";
import { withTranslation } from '../../i18n'

const OurService = ({isRTL,t}) => {
    return (
        <>  
            <a name="our-services" />
            <section>
            {isRTL?
                <BannerRight title={t('OURSERVICES.SERVICES')} />

                :
                <BannerLeft title={t('OURSERVICES.SERVICES')} />

                }

                <ImageRight
                
                    text={
                        <> {isRTL?
                            <div>
                            <span>برامجنا</span><br />
                            <span style={{ color: '#F7006C' }}>الترفيهية</span><br />
                            <span style={{ color: '#FFC581' }}>المجهزة لكم </span><br />
                            </div>
                           
                            :
                            <div>
                            <span>Our ready</span><br />
                            <span style={{ color: '#F7006C' }}>Entertainment</span><br />
                            <span style={{ color: '#FFC581' }}>Programs</span><br />
                            </div>
                          
                        }
                            
                        </>
                    }
                    img="/img/our-services/img1.png"
                    btnTitle={t('OURSERVICES.SHOWP')}
                    href="/programs"
                    style={{marginTop: 60,direction: `${isRTL ? 'rtl' : 'ltr'}`}}
                    width={601}
                    height={520}
                    imgStyle={{ width: 601, height: 520 }}
                />

                <ImageLeft
                    text={
                        <>
                            {isRTL?
                            <div>
                            <span>خدماتنا</span><br />
                            <span style={{ color: '#F7006C' }}>الترفيهية</span><br />
                            <span style={{ color: '#FFC581' }}>المجهزة لكم</span><br />
                            </div>
                            :
                            <div>
                            <span>Our</span><br />
                            <span style={{ color: '#F7006C' }}>Entertainment</span><br />
                            <span style={{ color: '#FFC581' }}>Services</span><br />
                            </div>
                            }
                            
                        </>
                    }
                    img="/img/our-services/img2.png"
                    btnTitle={t('OURSERVICES.SHOWS')}
                    href="/services"
                    style={{marginTop: 170,direction: `${isRTL ? 'rtl' : 'ltr'}`}}
                    width={740}
                    height={761}
                />

                <ImageRight
                    text={
                        <>
                        {isRTL?
                        <div>
                            <span>خدمات</span><br />
                            <span style={{ color: '#F7006C' }}>الفعليات</span><br />
                            <span style={{ color: '#FFC581' }}>الترفيهية</span><br />
                        </div>
                        :
                        <div>
                            <span>Our Services For</span><br />
                            <span style={{ color: '#F7006C' }}>Entertainment</span><br />
                            <span style={{ color: '#FFC581' }}>Events</span><br />
                        </div>
                        }
                       
                        </>
                    }
                    img="/img/our-services/img3.png"
                    btnTitle={t('OURSERVICES.SHOWE')}
                    href="/events"
                    style={{marginTop: 170,direction: `${isRTL ? 'rtl' : 'ltr'}`}}
                    width={477}
                    height={424}
                    imgStyle={{ width: 477, height: 424 }}
                />
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                }
            `}</style>
        </>
    )
}

  
export default withTranslation('common')(OurService);


