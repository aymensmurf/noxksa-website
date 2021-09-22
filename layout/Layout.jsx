import dynamic from 'next/dynamic'
import Footer from "./Footer";
import Nav from "./Nav";

const BackgroundAnimated = dynamic(() => import("../components/shared/BackgroundAnimated"), { ssr: false })

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />

            <BackgroundAnimated />
        </>
    )
}

export default Layout;