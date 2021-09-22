import BannerLeft from "../shared/BannerLeft";
import Album from "../shared/Album";
import { ALBUMS } from "../../utils/consts";

const CreativeStudio = () => {
    return (
        <>
            <section>
                <BannerLeft title="Creative Studio" />

                <div className="container" style={{ marginTop: 60 }}>
                    <div className="flex ai-c flex-wrap" style={{ gap: 30 }}>
                        {ALBUMS.map(({ title, mainImg, images }, i) => (
                            <Album key={i} title={title} mainImg={mainImg} images={images} />
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

export default CreativeStudio;