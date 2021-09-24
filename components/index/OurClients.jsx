import Image from 'next/image';
import BannerLeft from "../shared/BannerLeft";

const OurClients = () => {
    return (
        <>
            <a name="our-clients" />
            <section>
                <BannerLeft title="Our Clients" />

                <div className="container flex jc-c ai-c flex-wrap" style={{ gap: 30, marginTop: 110 }}>
                    <Image src="/img/clients/gea.png" alt="General Entertainment Authority" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/moe.png" alt="Ministry of Education" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/sc.png" alt="Saudi Customs" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/mod.png" alt="Ministry of Defense" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/hotma.png" alt="AlHaya ElOlya LiTawir Madinet ElRiyad" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/rcfau.png" alt="Royal Commission for Al-Ula" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/pif.png" alt="Public Investment Fund" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/ww.png" alt="Winter Wonderland" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/rb.png" alt="Riyad Bank" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/ss.png" alt="ElSondok ElSinaai" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/sa.png" alt="Saudi Aramco" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/ama.png" alt="Amanet Mintakit Assir" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/nupco.png" alt="NUPCO" width={170} height="100%" objectFit='contain' />
                    <Image src="/img/clients/aec.png" alt="Advanced Electroincs Company" width={170} height="100%" objectFit='contain' />
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                }

                @media only screen and (max-width: 1023px) {
                    section {
                        padding-top: 80px;
                    }
                }

                @media only screen and (max-width: 610px) {
                    section {
                        padding-top: 60px;
                    }
                }
            `}</style>
        </>
    )
}

export default OurClients;