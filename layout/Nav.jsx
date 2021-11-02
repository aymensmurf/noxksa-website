import { useEffect } from 'react';
import Image from 'next/image';

const Nav = ({ navWithBackground = false }) => {
    useEffect(() => {
        let doc = document.documentElement;
        let w = window;

        let prevScroll = w.scrollY || doc.scrollTop;
        let curScroll;
        let direction = 0;
        let prevDirection = 0;

        let header = document.getElementById('header');

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
            <header id="header">
                <nav className="container flex jc-sb ai-c">
                    <a href="/">
                        <Image src="/img/logo.png" alt="NOX Entertainment" width={261} height={74} objectFit="contain" />
                    </a>

                    <div>
                        <ul>
                            <li><a href="/#about-us">About Us</a></li>
                            <li><a href="/#our-clients">Our Clients</a></li>
                            <li><a href="/#our-services">Our Services</a></li>
                            <li><a href="/#creative-studio">Studio</a></li>
                            <li><a href="/#join-the-team">Join Us</a></li>
                            <li><a href="/#contact-us">Contact Us</a></li>
                            <li><a href="/client-questionnaire">Questionnaire</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <style jsx>{`
                #header {
                    padding: 20px 0px;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    transition: all .5s ease;
                    z-index: 99;
                    background-color: ${navWithBackground ? '#46356A' : 'transparent'};
                }

                #header.hide {
                    top: -143px;
                }

                #header.bg-color {
                    background-color: #46356A;
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

                @media only screen and (max-width: 1148px) {
                    ul {
                        gap: 15px;  
                    }
                    li {
                        font-size: 16px;
                    }
                }
            `}</style>
        </>
    )
}

export default Nav;