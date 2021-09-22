const BannerRight = ({ title }) => {
    return (
        <>
            <div className="banner-right">
                <div className="container flex ai-c" style={{ height: '100%' }}>
                    <h1>{title}</h1>
                </div>
            </div>

            <style jsx>{`
                .banner-right {
                    position: relative;
                    height: 168px;
                    background-image: url("/img/banner-right.png");
                    background-repeat: no-repeat;
                    background-position: center right;
                    background-size: contain;
                }

                h1 {
                    position: relative;
                    font-size: 6.7vw;
                    font-weight: 400;
                    color: #f7006c;
                    line-height: 90px;
                    font-family: "CodecColdTrial", sans-serif;
                    margin-top: 36px;
                }
            `}</style>
        </>
    )
}

export default BannerRight;