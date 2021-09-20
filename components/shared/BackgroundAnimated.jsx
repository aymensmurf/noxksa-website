import Particles from 'react-particles-js';

const BackgroundAnimated = () => {
    return (
        <>
            <div className="background-animated">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 60,
                                density: {
                                    enable: true
                                }
                            },
                            size: {
                                value: 10,
                                random: true
                            },
                            move: {
                                direction: "right",
                                out_mode: "out",
                                speed: 1.3
                            },
                            line_linked: {
                                enable: false
                            },
                            color: {
                                value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "bubble"
                                }
                            },
                            modes: {
                                bubble: {
                                    distance: 150,
                                    duration: 2,
                                    size: 30,
                                    opacity: 0
                                },
                            }
                        }
                    }} />
            </div>

            <style jsx>{`
                .background-animated {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 100;
                }
            `}</style>
        </>
    )
}

export default BackgroundAnimated;