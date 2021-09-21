const ImageLeft = ({ text, img, style, imgStyle }) => {
    return (
        <>
            <div className="container grid" style={{ ...style }}>
                <img src={img} alt="Our services" style={{ ...imgStyle }} />

                <div>
                    <h2>{text}</h2>

                    <button>Show All Programs</button>
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

                img {
                    object-fit: contain;
                }
            `}</style>
        </>
    )
}

export default ImageLeft;