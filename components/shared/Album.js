import { useState } from 'react'

const Album = ({ title, mainImg, images }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="album" onClick={() => setIsOpen(true)}>
                <img src={mainImg} alt={title} />
                <h4>{title}</h4>
            </div>

            <style jsx>{`
                .album {
                    text-align: center;
                    z-index: 98;
                    cursor: pointer;
                }

                img {
                    width: 264px;
                    height: 256px;
                    object-fit: cover;
                }

                h4 {
                    color: #007991;
                    font-size: 22px;
                    margin-top: 20px;
                }
            `}</style>
        </>
    )
}

export default Album;