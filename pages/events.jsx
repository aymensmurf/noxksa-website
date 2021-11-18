import Layout from "../layout/Layout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/consts';
import { i18n } from '../i18n'
import Image from 'next/image';
import Link from "next/link"


const Events = () => {
    const [isRTL, setIsRTL] = useState(false)
    const [events,setEvents]=useState([])
    useEffect(() => {
        getEvents()
        
    }, []);

    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)        
    },[i18n.language]);

    const getEvents = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/services/type/event`,
            
        };

        axios(config)
            .then(({ status, data }) => {
                if (status === 200) {
                   setEvents(data.data)
                }
            })
            .catch(err => {
                console.error('err', err)
            })
    };
    return (
        <>
            <Layout navWithBackground>
                <section className="container">
                    {
                        events.map(({ _id, description ,title,link,subCategories}, i) => (
                            <div key={_id}>
                            <h2 className={`colors${i%4}`}>  {isRTL?title.ar:title.en}
                            {  link ?
                             <a href={link}>
                               <Image src="/img/link.svg"  width={40} height={30} objectFit="contain" /> 
                              </a>  
                                :
                                <div></div>                                

                            }
                            </h2>

                           

                            <p>{isRTL?description.ar:description.en}</p>
                            {subCategories && subCategories.map(({ _id, description ,title}, i) => (
                               <div key={_id+i} style={{ marginLeft: "40px" }}>
                                   <h4 className={`colors${i%4}`}>{isRTL?title.ar:title.en}
                                        {link ?
                                        
                                                <Image src="/img/link.svg" alt="NOX Entertainment" href={link} width={40} height={30} objectFit="contain" />
                                                :
                                                <div></div>
                                        }
                                    </h4>
                                   <p>{isRTL?description.ar:description.en}</p>
                               </div>    
                            ))
                            }
                            </div>                            
                        ))
                    }
                    {/*
                    <p>No need to say about Our events cause we always aim to make you happy at the end with the customized event that satisfies your need with full pack  of our logestics of stage shows and the way of production and surely with branding your event and so on </p>

                    <h2>Stage Services</h2>
                    <p>One of our logistics is stage and all that it requires with full set <br />Such as : lights and sounds and all logistics Services.</p>

                    <h2 style={{ color: '#463568' }}>Organizers provider</h2>
                    <p>As we do , we’ll provide for your coming event the right organizers that suits your need .</p>
                    */}
                </section>
            </Layout>

            <style jsx>{`
                section {
                    padding-top: 200px;
                    padding-bottom: 60px;
                    min-height: calc(100vh - 187px)
                }

                h2 {
                    font-weight: 400;
                    font-size: 2rem;
                    direction: ${isRTL ? 'rtl' : 'ltr'};

                }

                h4 {
                    font-weight: 200;
                    font-size: 1rem;
                    direction: ${isRTL ? 'rtl' : 'ltr'};

                }

                p {
                    font-size: 1rem;
                    line-height: normal;          
                    font-weight: 700;
                    color: #272d3a;
                    margin-bottom: 20px;
                    direction: ${isRTL ? 'rtl' : 'ltr'};

                }
            `}</style>
        </>
    )
}

export default Events;