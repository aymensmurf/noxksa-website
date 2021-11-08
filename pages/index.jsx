import Layout from "../layout/Layout";
import { AboutUs, ContactUs, CreativeStudio, Home, JoinUs, OurClients, OurServices } from "../components/index";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/consts';
 







const Index = () => {

    const [clients,setClients]=useState([]);
    const [albums,setAlbums]=useState([]);
    useEffect(() => {
        getClients(),
        getAlbums()
        
    }, []);


    const getClients = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/clients`,
            
        };

        axios(config)
            .then(({ status, data }) => {
                if (status === 200) {
                   setClients(data.data)
                }
            })
            .catch(err => {
                console.log('err', err)
            })
    };



    const getAlbums = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/albums/specific`,
            
        };
    
        axios(config)
            .then(({ status, data }) => {
                if (status === 200) {
                   setAlbums(data.data)
                }
            })
            .catch(err => {
                console.log('err', err)
            })
    };
    return (
        <Layout>
            <Home />
            <AboutUs />
            <OurClients clients={clients} />
            <OurServices />
            <CreativeStudio  creativeStudio={albums}/>
            <JoinUs />
            <ContactUs />
        </Layout>
    )
}

export default Index;