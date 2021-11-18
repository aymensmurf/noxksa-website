import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { SERVER_URL } from '../../utils/consts';
import link from 'next/link';
import { API_URL } from '../../utils/consts';
import Layout from '../../layout/Layout';
import Gallery from 'react-grid-gallery';
import Iframe from 'react-iframe'
import { i18n } from '../../i18n'



const Album = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState([])
    const [isRTL, setIsRTL] = useState(false)
    const images=[]
    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
    }, [i18n.language]);
    
    useEffect(() => {
        for (let i=0;i<data.links.length;i++){
            
            const link=`${SERVER_URL}/uploads/${data.links[i].link}`
            if (data.links[i].type=="upload"){
                images.push({thumbnail:link,src:link ,thumbnailWidth: 320,
                    thumbnailHeight: 212,isSelected:true})   
            }
         
        }
        console.log(images)
        setImg(images)
        }, []);
    return (

        <>

            <Layout navWithBackground>

                <section style={{ position: 'relative', zIndex: 98 }} >

                    <div className="container" style={{ marginTop: 60 }} >
                        <h1>{isRTL?data.title.ar:data.title.en}</h1>
                        <p style={{ marginTop: 20 }}>{isRTL?data.description.ar:data.description.en}</p>

                        {data.links && data.links.length > 0 && (
                            <div className="grid">
                                {data.links.map((link, i) => (
                                    link.type === 'upload' ? (
                                        <img onClick={() => { setIsOpen(true) }}
                                            key={i}
                                            src={`${SERVER_URL}/uploads/${link.link}`}
                                            alt=""
                                            style={{ width: "100%", height: 300, objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <Iframe
                                            key={i}
                                            url={link.link}
                                            width="100%"
                                            height="300px"
                                        />
                                    )
                                ))}

                                {isOpen &&

                                <Gallery images={img} showLightboxThumbnails={true} backdropClosesModal={true} lightboxWillClose={()=>setIsOpen(false)} isOpen />

                                }
                        </div>
                        )}


                    </div>

                </section>

            </Layout>

            <style jsx>{`
                section {
                    padding-top: 160px;
                    padding-bottom: 160px;
                    min-height: calc(100vh - 187px);
                    direction: ${isRTL ? 'rtl' : 'ltr'};

                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 10px;
                    margin-top: 30px;
                }
            `}</style>
        </>
    )
}


export async function getServerSideProps({ query }) {
    const res = await fetch(`${API_URL}/albums/${query.id}`)
    const { data } = await res.json()

    return {
        props: {
            data
        },
    };
}
export default (Album);
