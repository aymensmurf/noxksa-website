import BackgroundAnimated from "../components/shared/BackgroundAnimated";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}

            <BackgroundAnimated />
        </>
    )
}

export default Layout;