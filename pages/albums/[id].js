import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { SERVER_URL } from '../../utils/consts';
import link from 'next/link';
import { API_URL } from '../../utils/consts';
import Layout from '../../layout/Layout';
import Gallery from 'react-grid-gallery';
import Iframe from 'react-iframe'



const Album = (props) => {
    const router = useRouter();
    const [img, setImg] = useState([])
    const [video, setVideo] = useState([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { data } = props.data.data
    const links = data.links
    const images = []
    const videos = []
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        for (let i = 0; i < links.length; i++) {
            const link = `${SERVER_URL}/uploads/${links[i].link}`
            if (links[i].link.startsWith('album')) {
                images.push({
                    thumbnail: link, src: link, thumbnailWidth: 320,
                    thumbnailHeight: 212
                })
            }
            else {
                videos.push(links[i].link)

            }


        }
        setVideo(videos)
        setImg(images)
        setTitle(data.title)
        setDescription(data.description)
    }, []);



    return (

        <>

            <Layout navWithBackground>

                <section style={{ position: 'relative', zIndex: 98 }} >

                    <div className="container" style={{ marginTop: 60 }} >
                        <h1>{title.en}</h1>
                        <p style={{ marginTop: 20 }}>{description.en}   </p>

                        <div className="album" style={{ marginTop: 20 }}>
                            <Gallery images={img} backdropClosesModal={true} margin={5} onClickThumbnail={() => setIsOpen(true)} />
                            {video.map((v, i) => (
                                <Iframe url={v}
                                    key={i}
                                    width="220px"
                                    height="220px"
                                    id="myId"
                                />
                            ))}

                        </div>
                        {console.log(isOpen)}

                    </div>

                </section>

            </Layout>

            <style jsx>{`
                section {
                    padding-top: 160px;
                    padding-bottom: 160px;
                    min-height: calc(100vh - 187px);
                }
                .album {
                    text-align: center;
                    z-index: 98;
                    cursor: pointer;
                }
              
               

            `}</style>
        </>
    )
}


export async function getServerSideProps({ query }) {
    const res = await fetch(`${API_URL}/albums/${query.id}`)
    const data = await res.json()

    return {
        props: {
            data: { data }
        },
    };
}
export default (Album);
