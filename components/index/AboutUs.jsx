import BannerRight from "../shared/BannerRight";

const AboutUs = () => {
    return (
        <>
            <a name="about-us" />
            <section>
                <BannerRight title="Who we are" />

                <div className="container">
                    <div className="content">
                        <p>NOX by Ktheeb Is a company specialized in creating entertainment, established in 2017 Specialized in creating concepts and building complete entertainment.</p>
                        <p>Through a short period of time the company made an outstanding model in transportable entertainment throughout the Kingdom of Saudi Arabia.</p>
                        <p>Since 2017 and until this day the company has grown along-side its employees with their capabilities and the creativity spread throughout the department,creating exceptional entertainment contents.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                }

                .content {
                    margin-top: 110px;
                    width: 50%;
                }

                p {
                    margin-bottom: 30px;
                }
            `}</style>
        </>
    )
}

export default AboutUs;