import BannerRight from "../shared/BannerRight";
import ImageLeft from "../shared/ImageLeft";
import ImageRight from "../shared/ImageRight";

const OurService = () => {
    return (
        <>
            <section>
                <BannerRight title="Our Services" />

                <ImageRight
                    text={
                        <>
                            <span>Our ready</span><br />
                            <span style={{ color: '#F7006C' }}>Entertainment</span><br />
                            <span style={{ color: '#FFC581' }}>Programs</span><br />
                        </>
                    }
                    img="/img/our-services/img1.png"
                    style={{ marginTop: 60 }}
                    width={601}
                    height={520}
                    imgStyle={{ width: 601, height: 520 }}
                />

                <ImageLeft
                    text={
                        <>
                            <span>Our</span><br />
                            <span style={{ color: '#F7006C' }}>Entertainment</span><br />
                            <span style={{ color: '#FFC581' }}>Services</span><br />
                        </>
                    }
                    img="/img/our-services/img2.png"
                    style={{ marginTop: 170 }}
                    width={740}
                    height={761}
                />

                <ImageRight
                    text={
                        <>
                            <span>Our Services For</span><br />
                            <span style={{ color: '#F7006C' }}>Entertainment</span><br />
                            <span style={{ color: '#FFC581' }}>Events</span><br />
                        </>
                    }
                    img="/img/our-services/img3.png"
                    style={{ marginTop: 170 }}
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

export default OurService;