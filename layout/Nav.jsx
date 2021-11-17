import { useEffect ,useState} from 'react';
import Image from 'next/image';
import { i18n, withTranslation } from '../i18n'

const Nav = ({ navWithBackground = false,t}) => {
    const [isRTL, setIsRTL] = useState(false)
    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
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
    },[i18n.language])

    return (
        <>
            <header id="header">
                <nav className="container flex jc-sb ai-c" style={{direction: isRTL?'rtl':'ltr'}}>
                    <a href="/">
                        <Image src="/img/logo.png" alt="NOX Entertainment" width={261} height={74} objectFit="contain" />
                    </a>
                  

                    <div>
                 
                        <ul>
                            <li><a href="/#about-us">{t('Nav.ABOUTUS')}</a></li>
                            <li><a href="/#our-clients">{t('Nav.OURCLIENTS')}</a></li>
                            <li><a href="/#our-services">{t('Nav.OURSERVICES')}</a></li>
                            <li><a href="/#creative-studio">{t('Nav.CREATIVESTUDIO')}</a></li>
                            <li><a href="/#join-the-team">{t('Nav.JOINTHETEAM')}</a></li>
                            <li><a href="/#contact-us">{t('Nav.CONTACTUS')}</a></li>
                            <li><a href="/client-questionnaire">{t('Nav.QUESTIONNAIRE')}</a></li>
                            <li className="circle" onClick={() => i18n.changeLanguage(isRTL ? 'en' : 'ar')} >{isRTL ? 'EN' : 'AR'}</li>
                        
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
                    font-family: "CoHeadline", sans-serif;
                    text-transform: capitalize;
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
              
            
                .circle {
                    width:55px;
                    height:55px;
                    border-radius: 50%;
                    border-style: solid;
                    border-color: white;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    color:white
                    position: relative;
                    margin-top: -12px;
                    cursor:pointer;
                    border-width: 1px;
                
                }

            `}</style>
                 <style>{`
                .form-group {
                    direction: ${isRTL ? 'rtl' : 'ltr'};
                }

                footer,select,textarea,form,input,footer {
                    text-align: ${isRTL ? 'right' : 'left'};
                }
                footer{
                    background-position:${isRTL ? 'bottom right' : 'bottom left'};
                }
              

            `}</style>

        </>
    )
}

export default withTranslation('common')(Nav)