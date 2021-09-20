import Layout from "../layout/Layout";
import { AboutUs, Home, OurClients } from "../components/index";

const Index = () => {
    return (
        <Layout>
            <Home />
            <AboutUs />
            <OurClients />
        </Layout>
    )
}

export default Index;