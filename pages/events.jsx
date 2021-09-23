import Layout from "../layout/Layout";

const Events = () => {
    return (
        <>
            <Layout navWithBackground>
                <section className="container">
                    <p>No need to say about Our events cause we always aim to make you happy at the end with the customized event that satisfies your need with full pack  of our logestics of stage shows and the way of production and surely with branding your event and so on </p>

                    <h2>Stage Services</h2>
                    <p>One of our logistics is stage and all that it requires with full set <br />Such as : lights and sounds and all logistics Services.</p>

                    <h2 style={{ color: '#463568' }}>Organizers provider</h2>
                    <p>As we do , we’ll provide for your coming event the right organizers that suits your need .</p>
                </section>
            </Layout>

            <style jsx>{`
                section {
                    padding-top: 200px;
                    padding-bottom: 60px;
                    min-height: calc(100vh - 187px)
                }

                h2 {
                    color: #007991;
                    font-weight: 400;
                    font-size: 2rem;
                }

                p {
                    font-size: 1rem;
                    line-height: normal;          
                    font-weight: 700;
                    color: #272d3a;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

export default Events;