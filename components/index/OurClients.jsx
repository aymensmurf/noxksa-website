import BannerLeft from "../shared/BannerLeft";

const OurClients = () => {
    return (
        <>
            <section>
                <BannerLeft title="Our Clients" />

                <div className="container flex ai-c flex-wrap" style={{ gap: 30, marginTop: 110 }}>
                    <img src="/img/clients/gea.png" alt="General Entertainment Authority" />
                    <img src="/img/clients/moe.png" alt="Ministry of Education" />
                    <img src="/img/clients/sc.png" alt="Saudi Customs" />
                    <img src="/img/clients/mod.png" alt="Ministry of Defense" />
                    <img src="/img/clients/hotma.png" alt="AlHaya ElOlya LiTawir Madinet ElRiyad" />
                    <img src="/img/clients/rcfau.png" alt="Royal Commission for Al-Ula" />
                    <img src="/img/clients/pif.png" alt="Public Investment Fund" />
                    <img src="/img/clients/ww.png" alt="Winter Wonderland" />
                    <img src="/img/clients/rb.png" alt="Riyad Bank" />
                    <img src="/img/clients/ss.png" alt="ElSondok ElSinaai" />
                    <img src="/img/clients/sa.png" alt="Saudi Aramco" />
                    <img src="/img/clients/ama.png" alt="Amanet Mintakit Assir" />
                    <img src="/img/clients/nupco.png" alt="NUPCO" />
                    <img src="/img/clients/aec.png" alt="Advanced Electroincs Company" />
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                }

                img {
                    width: 170px;
                    object-fit: contain;
                }
            `}</style>
        </>
    )
}

export default OurClients;