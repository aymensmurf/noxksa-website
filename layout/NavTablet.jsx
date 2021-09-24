import { useEffect, useState } from 'react';
import Image from 'next/image';

const NavTablet = ({ navWithBackground }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let doc = document.documentElement;
        let w = window;

        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        let header = document.getElementById('main-nav-tablet');

        let checkScroll = function () {
            curScroll = w.scrollY || doc.scrollTop;

            if (curScroll <= 40) {
                header.classList.remove('bg-color');
            }

            if (curScroll > prevScroll) {
                direction = 2;
            }
            else if (curScroll < prevScroll) {
                direction = 1;
            }

            if (direction !== prevDirection) {
                toggleHeader(direction, curScroll);
            }

            prevScroll = curScroll;
        };

        let toggleHeader = function (direction, curScroll) {
            if (direction === 2 && curScroll > 40) {
                header.classList.add('hide');
                prevDirection = direction;
            } else if (direction === 1) {
                header.classList.remove('hide');
                header.classList.add('bg-color');
                prevDirection = direction;
            }
        };

        window.addEventListener('scroll', checkScroll);
    }, [])

    return (
        <>
            <nav id="main-nav-tablet">
                <a href="/">
                    <Image src="/img/logo.png" alt="NOX Entertainment" width={261} height={74} objectFit="contain" />
                </a>
                <div className="flex ai-c" style={{ gap: 5 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <div style={{ marginTop: 10 }}>
                            <Image src={`/img/menu-close.svg`} alt="Close menu icon" width={15} height={22} objectFit="contain" />
                        </div>
                    ) : (
                        <Image src={`/img/menu.svg`} alt="Menu icon" width={26} height={22} objectFit="contain" />
                    )}
                </div>
            </nav>

            <div id="menu">
                <a href="/#about-us"><h3>About Us</h3></a>
                <a href="/#our-clients"><h3>Our Clients</h3></a>
                <a href="/#our-services"><h3>Our Services</h3></a>
                <a href="/#creative-studio"><h3>Creative Studio</h3></a>
                <a href="/#join-the-team"><h3>Join The Team</h3></a>
                <a href="/#contact-us"><h3>Contact Us</h3></a>
            </div>

            <style jsx>{`
                #main-nav-tablet {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 99;
                    padding: 20px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all .5s ease;
                    background-color: ${navWithBackground ? '#46356A' : 'transparent'};
                }
                
                #main-nav-tablet.hide {
                    top: -143px;
                }

                #main-nav-tablet.bg-color {
                    background-color: #fff;
                }

                #menu {
                    position: fixed;
                    width: 100%;
                    transition: all .7s ease;
                    z-index: 98;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #46356A;
                    min-height: ${isMenuOpen ? '100vh' : '0vh'};
                    top: ${isMenuOpen ? '0' : '-100vh'};
                }

                h3 {
                    color: #fff;
                    font-size: 30px;
                    line-height: 36px;
                    margin-top: 30px;
                }
            `}</style>
        </>
    )
}

export default NavTablet;