import Layout from "../layout/Layout";

const Programs = () => {
    return (
        <>
            <Layout navWithBackground>
                <section className="container">
                    <h2>Annual Event</h2>
                    <p>A world that is full with our special challenges from solving mysteries to finding the key to survive and experiencing new things in curtain time like : GOOSEBUMPS , Shaikh Omar’s legacy , Wallmash -Grap & Get – Rage Room and so on …</p>

                    <h2 style={{ color: '#463568' }}>Family day</h2>
                    <p>A day that bring happiness to the families of the employees ,gathering them all together spending it outside the workplace in fun physical activities, challenges and many other …</p>

                    <h2 style={{ color: '#f7006c' }}>Young Employee</h2>
                    <p>A day for the Employees’ children to let them know better about their parents’ workplace within educational / entertainment activities… </p>

                    <h2 style={{ color: '#ffc581' }}>Team building Activities</h2>
                    <p>Events and activities that enhance the communication between the employees  and strengthen the bonds between them  in extremely fun way.</p>

                    <h2 style={{ color: '#463568' }}>Internal Activites</h2>
                    <p>Different fun activities that break the work daily routine that fits the work environment to let the employees start their day in exciting way .</p>

                    <h2 style={{ color: '#f7006c' }}>VIP Entertainment</h2>
                    <p>Every thing special for the special ones, starting from the entertainment services to the programs in fully privacy way .</p>

                    <h2>Open Day</h2>
                    <p>Employees Day outside the workplace  , changing the working environment to an entertainment fun one.</p>

                    <h2 style={{ color: '#463568' }}>Outdoor Trips</h2>
                    <p>Time to move things outside , by our outdoor trips that may be in deserts or mountains or any special place for you.</p>

                    <h2 style={{ color: '#f7006c' }}>Volunteering Activities</h2>
                    <p>A day for the Employees’ children to let them know better about their parents’ workplace within educational / entertainment activities… A group of humanitarian activities that raise the awareness about necessity of charity to the employees.</p>
                </section>
            </Layout>

            <style jsx>{`
                section {
                    padding-top: 200px;
                    padding-bottom: 60px;
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

export default Programs;