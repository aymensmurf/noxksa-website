import BackgroundAnimated from "../components/shared/BackgroundAnimated";
import Footer from "./Footer";
import Nav from "./Nav";

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