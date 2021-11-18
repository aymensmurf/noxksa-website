import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { SERVER_URL } from '../../utils/consts';
import link from 'next/link';
import { API_URL } from '../../utils/consts';
import Layout from '../../layout/Layout';
import Gallery from 'react-grid-gallery';
import Iframe from 'react-iframe'



const Album = ({ data }) => {
    return (

        <>

            <Layout navWithBackground>

                <section style={{ position: 'relative', zIndex: 98 }} >

                    <div className="container" style={{ marginTop: 60 }} >
                        <h1>{data.title.en}</h1>
                        <p style={{ marginTop: 20 }}>{data.description.en}</p>

                        {data.links && data.links.length > 0 && (
                            <div className="grid">
                                {data.links.map((link, i) => (
                                    link.type === 'upload' ? (
                                        <img
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
