const BannerLeft = ({ title }) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <img src="/img/banner-left.png" alt="Banner left" />

                <div className="container flex ai-c jc-end" style={{ height: 168 }}>
                    <h1>{title}</h1>
                </div>
            </div>

            <style jsx>{`
                h1 {
                    position: relative;
                    font-size: 6.7vw;
                    font-weight: 400;
                    color: #f7006c;
                    line-height: 90px;
                    font-family: "CodecColdTrial", sans-serif;
                    margin-top: 10px;
                }

                img {
                    height: 168px;
                    object-fit: contain;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}</style>
        </>
    )
}

export default BannerLeft;