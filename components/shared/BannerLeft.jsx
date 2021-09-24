import Image from 'next/image'

const BannerLeft = ({ title }) => {
    return (
        <>
            <div className="banner-left">
                <div className="container flex ai-c jc-end" style={{ height: '100%' }}>
                    <h1>{title}</h1>
                </div>
            </div>

            <style jsx>{`
                .banner-left {
                    position: relative;
                    height: 168px;
                    background-image: url("/img/banner-left.png");
                    background-repeat: no-repeat;
                    background-position: center left;
                    background-size: contain;
                }

                h1 {
                    position: relative;
                    font-size: 100px;
                    font-weight: 400;
                    color: #f7006c;
                    line-height: 40px;
                    font-family: "CodecColdTrial", sans-serif;
                    margin-top: 10px;
                }

                @media only screen and (max-width: 1256px) {
                    .banner-left {
                        background-position: center right;
                        background-size: cover;
                    }

                    h1 {
                        color: #fff;
                    }
                }

                @media only screen and (max-width: 1023px) {
                    h1 {
                        font-size: 80px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    h1 {
                        font-size: 50px;
                    }
                }
            `}</style>
        </>
    )
}

export default BannerLeft;