import { useEffect, useState } from 'react'
import Image from 'next/image'
import Gallery from 'react-grid-gallery';
import { useRouter } from 'next/router'

import { SERVER_URL } from '../../utils/consts';

const Album = ({ title, mainImg,id }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
    const [img ,setImg]=useState([])
/*
    const images=[]

    useEffect(() => {
        for (let i=0;i<IMAGES.length;i++){
            
            const link=`${SERVER_URL}/uploads/${IMAGES[i].link}`
            console.log(link)
            
            images.push({thumbnail:link,src:link ,thumbnailWidth: 320,
                thumbnailHeight: 212,isSelected:true})   
=======
    const [img, setImg] = useState([])
    const images = []

    useEffect(() => {
        for (let i = 0; i < IMAGES.length; i++) {
            const link = `${SERVER_URL}/uploads/${IMAGES[i].link}`

            images.push({
                thumbnail: link, src: link, thumbnailWidth: 320,
                thumbnailHeight: 212, isSelected: true
            })
>>>>>>> 50b7ed3394908e64abb361f2413f7e59f990c871
        }
        setImg(images)
<<<<<<< HEAD
        }, []);
  
    
  */
        const handleViewAlbum = id => {
            router.push({
                pathname: '/albums/[id]',
                query: { id },
      })
        }
    
    
    
    
    return (
        <>  
            <div className="album" onClick={() => {handleViewAlbum(id)}}>
                
                     <Image src={mainImg} alt={title} width={264} height={256} objectFit="cover" />
                <h4>{title}</h4>               

            </div>

        {/*  {isOpen &&

                <Gallery images={img} backdropClosesModal={true} lightboxWillClose={()=>setIsOpen(false)} isOpen />

                }
            */}
            
            
=======
    }, []);



    return (
        <>
            <div className="album" onClick={() => setIsOpen(true)}>

                <Image src={mainImg} alt={title} width={264} height={256} objectFit="cover" />
                <h4>{title}</h4>







            </div>

            {isOpen &&
                <Gallery images={img} backdropClosesModal={true} lightboxWillClose={() => setIsOpen(false)} isOpen />

            }



>>>>>>> 50b7ed3394908e64abb361f2413f7e59f990c871
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