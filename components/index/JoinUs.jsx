const JoinUs = () => {
    return (
        <>
            <section className="flex flex-column ai-c jc-c" style={{ textAlign: 'center', gap: 10 }}>
                <h2>Join us</h2>

                <div className="flex ai-c jc-c" style={{ gap: 60 }}>
                    <button>Employee</button>
                    <button>Organizer</button>
                </div>

                <img src="/img/team.png" alt="Join Us" />
            </section>

            <style jsx>{`
                section {
                    background-image: url('/img/join-us-bg.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 100vh;
                    overflow: hidden;
                    padding: 50px 0px;
                }

                h2 {
                    color: #fff;
                    font-size: 59px;
                    font-weight: 200;
                }

                img {
                    width: 1250px;
                    height: 518px;
                    object-fit: contain;
                }
            `}</style>
        </>
    )
}

export default JoinUs;