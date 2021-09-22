import { useState } from 'react'
import Image from 'next/image'

const Album = ({ title, mainImg, images }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="album" onClick={() => setIsOpen(true)}>
                <Image src={mainImg} alt={title} width={264} height={256} objectFit="cover" />
                <h4>{title}</h4>
            </div>

            <style jsx>{`
                .album {
                    text-align: center;
                    z-index: 98;
                    cursor: pointer;
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