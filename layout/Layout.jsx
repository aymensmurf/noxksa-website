import dynamic from 'next/dynamic'
import Footer from "./Footer";
import Nav from "./Nav";

const BackgroundAnimated = dynamic(() => import("../components/shared/BackgroundAnimated"), { ssr: false })

const Layout = ({ navWithBackground, children }) => {
    return (
        <>
            <Nav navWithBackground={navWithBackground} />
            {children}
            <Footer />

            <BackgroundAnimated />
        </>
    )
}

export default Layout;