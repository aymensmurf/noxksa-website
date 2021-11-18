import Layout from "../layout/Layout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/consts';
import { i18n } from '../i18n'
import Image from 'next/image';

const Programs = () => {
    const [isRTL, setIsRTL] = useState(false)
    const [programs, setPrograms] = useState([])
    useEffect(() => {
        getPrograms()

    }, []);
    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
    }, [i18n.language]);



    const getPrograms = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/services/type/program`,

        };

        axios(config)
            .then(({ status, data }) => {
                if (status === 200) {
                    setPrograms(data.data)
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
<<<<<<< HEAD
                {
                    programs.map(({ _id, description ,title,link ,subCategories}, i) => (
                        <div key={_id}>
                        <h2 className={`colors${i%4}`}>{isRTL?title.ar:title.en}   {link ?
                                
                                <Image src="/img/link.svg" alt="NOX Entertainment" width={40} height={30} objectFit="contain" />
                                :
                                <div></div>
                        }
                        </h2>
                        <p>{isRTL?description.ar:description.en}</p>
                        {subCategories && subCategories.map(({ _id, description ,title,link}, i) => (
                               <div key={_id+i} style={{ marginLeft: "40px" }}>
                                   <h4 className={`colors${i%4}`}>{isRTL?title.ar:title.en} {link ?
                                
                                <Image src="/img/link.svg" alt="NOX Entertainment" width={40} height={30} objectFit="contain" />
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
=======
                    {
                        programs.map(({ _id, description, title, subCategories }, i) => (
                            <div key={_id}>
                                <h2 className={`colors${i % 4}`}>{isRTL ? title.ar : title.en}</h2>
                                <p>{isRTL ? description.ar : description.en}</p>
                                {subCategories && subCategories.map(({ _id, description, title }, i) => (
                                    <div key={_id + i} style={{ marginLeft: "40px" }}>
                                        <h4 className={`colors${i % 4}`}>{isRTL ? title.ar : title.en}</h4>
                                        <p>{isRTL ? description.ar : description.en}</p>
                                    </div>
                                ))
                                }
                            </div>
                        ))
                    }
                    {/*
>>>>>>> 50b7ed3394908e64abb361f2413f7e59f990c871
                    <h2>Annual Event</h2>
                    <p>A world that is full with our special challenges from solving mysteries to finding the key to survive and experiencing new things in curtain time like : GOOSEBUMPS , Shaikh Omar’s legacy , Wallmash -Grap & Get – Rage Room and so on …</p>

                    <h2 style={{ color: '#463568' }}>Family day</h2>
                    <p>A day that bring happiness to the families of the employees ,gathering them all together spending it outside the workplace in fun physical activities, challenges and many other …</p>

                    <h2 style={{ color: '#f7006c' }}>Young Employee</h2>
                    <p>A day for the Employees’ children to let them know better about their parents’ workplace within educational / entertainment activities… </p>

                    <h2 style={{ color: '#ffc581' }}>Team building Activities</h2>
                    <p>Events and activities that enhance the communication between the employees  and strengthen the bonds between them  in extremely fun way.</p>

                    <h2 style={{ color: '#463568' }}>Internal Activites</h2>
                    <p>Different fun activities that break the work daily routine that fits the work environment to let the employees start their day in exciting way .</p>

                    <h2 style={{ color: '#f7006c' }}>VIP Entertainment</h2>
                    <p>Every thing special for the special ones, starting from the entertainment services to the programs in fully privacy way .</p>

                    <h2>Open Day</h2>
                    <p>Employees Day outside the workplace  , changing the working environment to an entertainment fun one.</p>

                    <h2 style={{ color: '#463568' }}>Outdoor Trips</h2>
                    <p>Time to move things outside , by our outdoor trips that may be in deserts or mountains or any special place for you.</p>

                    <h2 style={{ color: '#f7006c' }}>Volunteering Activities</h2>
                    <p>A day for the Employees’ children to let them know better about their parents’ workplace within educational / entertainment activities… A group of humanitarian activities that raise the awareness about necessity of charity to the employees.</p>
                */
                    }
                </section>
            </Layout>

            <style jsx>{`
                section {
                    padding-top: 200px;
                    padding-bottom: 60px;
                    direction: ${isRTL ? 'rtl' : 'ltr'};

                }

                h2 {
                    font-weight: 400;
                    font-size: 2rem;
                }

                h4 {
                    font-weight: 200;
                    font-size: 1rem;
                }

                p {
                    font-size: 1rem;
                    line-height: normal;          
                    font-weight: 700;
                    color: #272d3a;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

export default Programs;