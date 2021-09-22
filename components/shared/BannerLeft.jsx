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
                    font-size: 6.7vw;
                    font-weight: 400;
                    color: #f7006c;
                    line-height: 90px;
                    font-family: "CodecColdTrial", sans-serif;
                    margin-top: 10px;
                }
            `}</style>
        </>
    )
}

export default BannerLeft;