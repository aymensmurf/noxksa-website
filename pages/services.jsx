import Layout from "../layout/Layout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/consts';
import { i18n } from '../i18n'
const Services = () => {
    const [services,setServices]=useState([])
    const [isRTL, setIsRTL] = useState(false)
    useEffect(() => {
        getServices()
        
    }, []);
    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)        
    },[i18n.language]);

    const getServices = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/services/type/service`,
            
        };

        axios(config)
            .then(({ status, data }) => {
                if (status === 200) {
                   setServices(data.data)
                   console.log(data)
                }
            })
            .catch(err => {
                console.log('err', err)
            })
    };
    return (
        <>
            <Layout navWithBackground>
                <section className="container">
                    {
                        services.map(({ _id, description ,title,subCategories}, i) => (
                            <div key={_id} >
                            <h2 className={`colors${i%4}`}>{isRTL?title.ar:title.en}</h2>
                            <p>{isRTL?description.ar:description.en}</p>
                            {
                                subCategories && subCategories.map(({ _id, description ,title}, i) => (
                                <div key={_id+i} style={{ marginLeft: "40px" }}>                                    
                                    <h4 className={`colors${i%4}`}>{isRTL?title.ar:title.en}</h4>
                                    <p>{isRTL?description.ar:description.en}</p>
                                </div>    
                             ))
                            }
                            </div>
               
                        ))
                        
                    }
                    {/*
                    <h2>Special Editions</h2>
                    <p>A world that is full with our special challenges from solving mysteries to finding the  key to survive and experiencing new things in curtain time like : GOOSEBUMPS ,  Shaikh Omar’s legacy , Wallmash -Grap & Get – Rage Room  and so on …</p>

                    <h2 style={{ color: '#463568' }}>Carnival Games</h2>
                    <p>We are the land of all motion games beginning from the young till the youth , were we have variety of games that move every mucsle  e.g. : wrecking ball – Pulling race – Sumo  – Smashing ballsRage bull – Maze – Hamster – Reslting and other games …</p>

                    <h2 style={{ color: '#f7006c' }}>Vr Games</h2>
                    <p>We’ll take you from this world to the virtual one , a different world that is full of adventures and various games. <br />
                        e.g. :  VR Cannon – Plane – VR Chair – VR Battle – Formula and many more …</p>

                    <h2 style={{ color: '#ffc581' }}>Kids Zone</h2>
                    <p>In children beautiful world we added all what is fun and joyful and educational to leace the child have the finest times safely without the parents. <br />
                        e.g. “ : Gaint Lego – Art zone – Cenima – Trampoline -storyteller and more… </p>

                    <h2>Adventure Games</h2>
                    <p>Games that questions the curiousity of the person to find the treasure or get into another creative kind of fun. <br />
                        e.g. :  Karting – Treasure Haunt – Honey Comp Maze and more…</p>

                    <h2 style={{ color: '#463568' }}>Groups Battle</h2>
                    <p>Get ready with your team to have a challenge between another team in Battle of colors or lazers full of struggles to raise the challenge of winning between teams . <br />
                        e.g. : paintball , lazertag and etc… </p>

                    <h2 style={{ color: '#f7006c' }}>Team building Activities</h2>
                    <p>Events and activities that enhance the communication between the employees to break the daily boring routine. <br />
                        For Example : Physical Activities – treasure haunt – two groups challenges and more…</p>

                    <h2 style={{ color: '#ffc581' }}>Roaming Shows</h2>
                    <p>international and local various shows that adds to every event fun spirit and the new experiences it carry with. <br />
                        e.g. : Parades – Stage shows – magicians – living statues clowns and more ...</p>

                    <h2>Table games</h2>
                    <p>The base of every event is the different table games that gather people to play and enjoy competeing between each others. <br />
                        e.g. : Billiard – PingPong – Foosball – Ballot – air hookey and mony ..</p>

                    <h2 style={{ color: '#463568' }}>Inflatbles</h2>
                    <p>We are the land of all motion games beginning from the young till the youth , were we have variety of games that move every mucsle. <br />
                        e.g. : wrecking ball – Pulling race – Sumo  – Smashing ballsRage bull – Maze – Hamster – Reslting and other games … </p>
                
                    */}

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

export default Services;