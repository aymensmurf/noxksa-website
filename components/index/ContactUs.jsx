import BannerRight from '../shared/BannerRight'

const ContactUs = () => {
    return (
        <>
            <section>
                <BannerRight title="Contact Us" />

                <div className="container" style={{ marginTop: 60 }}>
                    <div className="grid">
                        <div>
                            <iframe src="https://maps.google.com/maps?q=Technology%20Fundamentals%20Trading%20Company&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near" />
                        </div>

                        <div className="flex jc-sb flex-wrap" style={{ marginTop: 0, gap: 60 }}>
                            <div>
                                <h3>Contact us:</h3>
                                <div className="flex ai-c">
                                    <img src="/img/icons/wa.png" alt="Whatsapp" />
                                    <p>+966 55 444 3450</p>
                                </div>
                                <div className="flex ai-c">
                                    <img src="/img/icons/phone.png" alt="Phone" />
                                    <p>920033680</p>
                                </div>
                            </div>
                            <div>
                                <h3>Follow us:</h3>
                                <div className="flex ai-c">
                                    <a href="https://twitter.com/NoxKsa" target="_blank" rel="noopener noreferrer"><img src="/img/icons/tw.png" alt="Twitter" /></a>
                                    <a href="https://twitter.com/NoxKsa" target="_blank" rel="noopener noreferrer"><p>@NoxKsa</p></a>
                                </div>
                                <div className="flex ai-c">
                                    <a href="https://www.facebook.com/nox.ksa" target="_blank" rel="noopener noreferrer"><img src="/img/icons/fb.png" alt="Phone" /></a>
                                    <a href="https://www.instagram.com/nox.ksa" target="_blank" rel="noopener noreferrer"><img src="/img/icons/in.png" alt="Phone" /></a>
                                    <p>@Nox.Ksa</p>
                                </div>
                            </div>
                            <div>
                                <h3>Our office:</h3>
                                <p>Near Red Fox in 7th Deam Almasif, Riyadh 12647</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                    padding-bottom: 160px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }

                iframe {
                    border: none;
                    width: 100%;
                    height: 100%;
                }

                h3 {
                    color: #632166;
                    font-weight: 500;
                    font-size: 1.75rem;
                }

                img {
                    width: 40px;
                    height: 40px;
                    object-fit: contain;
                }

                p {
                    color: #463568;
                    font-size: 22px;
                }

                .flex {
                    margin-top: 15px;
                    gap: 15px;
                }
            `}</style>
        </>
    )
}

export default ContactUs;