import Image from 'next/image'
import Link from 'next/link'

const ImageLeft = ({ text, img, style, width, height, btnTitle, href = "#" }) => {
    return (
        <>
            <div className="container grid" style={{ ...style }}>
                <Image src={img} alt="Our services" width={width} height={height} objectFit="contain" />

                <div>
                    <h2>{text}</h2>

                    <Link href={href}>
                        <button>{btnTitle}</button>
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
            `}</style>
        </>
    )
}

export default ImageLeft;