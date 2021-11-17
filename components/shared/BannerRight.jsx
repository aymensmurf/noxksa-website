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
                    height: 190px;
                    background-image: url("/img/banner-right.png");
                    background-repeat: no-repeat;
                    background-position: center right;
                    background-size: contain;
                }

                h1 {
                    position: relative;
                    font-size: 90px;
                    font-weight: 400;
                    color: #f7006c;
                    font-family: "CoHeadline", sans-serif;
                    margin-top: 0px;
                }

                @media only screen and (max-width: 1256px) {
                    .banner-right {
                        background-position: center left;
                        background-size: cover;
                    }

                    h1 {
                        color: #fff;
                    }
                }

                @media only screen and (max-width: 1023px) {
                    h1 {
                        font-size: 80px;
                        margin-top: 30px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    h1 {
                        font-size: 50px;
                        margin-top: 26px;
                    }
                }
            `}</style>
        </>
    )
}

export default BannerRight;