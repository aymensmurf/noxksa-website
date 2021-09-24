import Layout from "../layout/Layout";
import { AboutUs, ContactUs, CreativeStudio, Home, JoinUs, OurClients, OurServices } from "../components/index";

const Index = () => {
    return (
        <Layout>
            <Home />
            <AboutUs />
            <OurClients />
            {/* <OurServices />
            <CreativeStudio />
            <JoinUs />
            <ContactUs /> */}
        </Layout>
    )
}

export default Index;