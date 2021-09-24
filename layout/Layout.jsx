import dynamic from 'next/dynamic'
import Footer from "./Footer";
import Nav from "./Nav";
import NavTablet from './NavTablet';

const BackgroundAnimated = dynamic(() => import("../components/shared/BackgroundAnimated"), { ssr: false })

const Layout = ({ navWithBackground, children }) => {
    return (
        <>
            <div className="visible-desktop">
                <Nav navWithBackground={navWithBackground} />
            </div>
            <div className="visible-tablet">
                <NavTablet navWithBackground={navWithBackground} />
            </div>
            {children}
            <Footer />

            <BackgroundAnimated />
        </>
    )
}

export default Layout;