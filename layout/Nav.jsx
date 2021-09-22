import Image from 'next/image';

const Nav = () => {
    return (
        <>
            <header>
                <nav className="container flex jc-sb ai-c">
                    <Image src="/img/logo.png" alt="NOX Entertainment" width={261} height={74} objectFit="contain" />

                    <div>
                        <ul>
                            <li>About Us</li>
                            <li>Our Clients</li>
                            <li>Our Services</li>
                            <li>Creative Studio</li>
                            <li>Join The Team</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </nav>
            </header>

            <style jsx>{`
                header {
                    padding: 20px 0px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 99;
                }

                ul {
                    display: flex;
                    gap: 20px;
                }

                li {
                    list-style: none;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 500;
                    font-family: "Quicksand", sans-serif;
                    text-transform: capitalize;
                    cursor: pointer;
                }

                li:hover {
                    color: #fec681;
                }
            `}</style>
        </>
    )
}

export default Nav;