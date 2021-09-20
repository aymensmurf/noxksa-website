import { useEffect, useState } from 'react'

const WORDS = ["Services", "Programs", "Events"]

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index > WORDS.length - 2) {
                setIndex(0)
            } else {
                setIndex(index + 1);
            }
        }, 2000);

        return () => { clearInterval(interval); };
    }, [index]);

    return (
        <>
            <section className="flex ai-c">
                <video className="video" preload="true" autoPlay muted>
                    <source src="/videos/home.mp4" type="video/mp4" />
                </video>

                <div className="home-text-container">
                    <h1>
                        <span>The Most</span><br />
                        <span>ENTERTAINMENT</span><br />
                        <span className="word-animation">{WORDS[index]}</span><br />
                        <span>All For You</span><br />
                    </h1>
                </div>
            </section>

            <style jsx>{`
                section {
                    background-color: #46356A;
                    position: relative;
                    height: 100vh;
                    width: 100vw;
                }

                video {
                    position: absolute;
                    top: -111px;
                    right: 0;
                    min-width: 100%;
                    min-height: 100%;
                    z-index: 1;
                }

                .home-text-container {
                    z-index: 2;
                    margin-left: 50%;
                }

                h1 {
                    color: #fff;
                    font-size: 4.6vw;
                    line-height: 6vw;
                    font-weight: 700;
                    font-family: 'CodecColdTrial', sans-serif;
                }

                h1 span:nth-child(3) {
                    color: rgb(245, 6, 108);
                }

                h1 span:nth-child(5) {
                    color: rgb(254, 198, 129);
                }
            `}</style>
        </>
    )
}

export default Home;