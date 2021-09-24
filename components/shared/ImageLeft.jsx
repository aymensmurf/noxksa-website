import Image from 'next/image'
import Link from 'next/link'

const ImageLeft = ({ text, img, style, width, height, btnTitle, href = "#" }) => {
    return (
        <>
            <div className="container grid" style={{ ...style }}>
                <div>
                    <Image src={img} alt="Our services" width={width} height={height} objectFit="contain" />
                </div>

                <div>
                    <h2>{text}</h2>

                    <Link href={href} passHref>
                        <button style={{ marginTop: 40 }}>{btnTitle}</button>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 60px;
                }

                h2 {
                    color: #463568;
                    font-size: 62px;
                    font-family: "CoHeadline", sans-serif;
                    font-weight: 400;
                    line-height: 70px;
                }

                

                @media only screen and (max-width: 1082px) {
                    h2 {
                        font-size: 50px;
                        line-height: 60px;
                    }
                }

                @media only screen and (max-width: 906px) {
                    h2 {
                        font-size: 40px;
                        line-height: 48px;
                    }
                }

                @media only screen and (max-width: 730px) {
                    h2 {
                        font-size: 50px;
                        line-height: 60px;
                    }

                    .grid {
                        grid-template-columns: 1fr;
                    }

                    @media only screen and (max-width: 441px) {
                        h2 {
                            font-size: 36px;
                            line-height: 46px;
                        }
                    }
                }
            `}</style>
        </>
    )
}

export default ImageLeft;