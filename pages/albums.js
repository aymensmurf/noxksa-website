import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import axios from 'axios';
import Album from "../components/shared/Album";
import { SERVER_URL } from '../utils/consts';
import { API_URL } from '../utils/consts';
import { i18n, withTranslation } from '../i18n'

const CreativeStudio = () => {

    const [isRTL, setIsRTL] = useState(false)
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
    }, [i18n.language]);

    useEffect(() => {
        getAllAlbums()

    }, []);
    const getAllAlbums = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/albums`,

        };

        axios(config)
            .then(({ status, data }) => {
                if (status === 200) {
                    setAlbums(data.data)
                }
            })
            .catch(err => {
                console.error('err', err)
            })
    };

    return (
        <>
            <Layout navWithBackground>

                <section >
                    <div className="container" style={{ marginTop: 60, direction: `${isRTL ? 'rtl' : 'ltr'}` }} >
                        <div className="flex ai-c flex-wrap" style={{ gap: 30 }}>
                            {albums.map(({ title, links }, i) => (
                                isRTL ?
                                    <Album key={i} title={title.ar} mainImg={`${SERVER_URL}/uploads/${links[parseInt(Math.random() * (links.length))].link}`} IMAGES={links} />

                                    :
                                    <Album key={i} title={title.en} mainImg={`${SERVER_URL}/uploads/${links[parseInt(Math.random() * (links.length))].link}`} IMAGES={links} />

                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                section {
                    padding-top: 160px;
                    padding-bottom: 160px;
                    min-height: calc(100vh - 187px);
                }
            `}</style>
        </>
    )
}

export default withTranslation('common')(CreativeStudio);
