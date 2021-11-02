import Image from 'next/image';
import BannerLeft from "../shared/BannerLeft";
import { SERVER_URL } from '../../utils/consts';
import Link from 'next/link'

  const OurClients = ({clients}) => {
    return (
        <>
            <a name="our-clients" />
            <section>
                <BannerLeft title="Our Clients" />

       


                <div className="container flex jc-c ai-c flex-wrap" style={{ gap: 30, marginTop: 110 }}>
                    {
                        clients.map(({ _id, link ,img}, i) => (
                        <a href={link} key={_id}>
                         <Image key={_id} to={link} src={`${SERVER_URL}/uploads/${img}`}   alt="x" width={170} height="100%" objectFit='contain' />
                        </a>
                        ))

                    }
                    
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