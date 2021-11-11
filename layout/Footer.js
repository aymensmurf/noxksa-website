import { withTranslation } from '../i18n'
const Footer = ({t}) => {
    //                    background-position: bottom left;

    return (
        <>
            <footer className="flex ai-c jc-end">
                <p>{t('FOOTER.footer')}</p>
            </footer>

            <style jsx>{`
                footer {
                    margin-top: 100px;
                    height: 87px;
                    background-image: url("/img/footer.png");
                    background-repeat: no-repeat;
                    background-size: contain;
                }

                p {
                    color: #463568;
                    font-weight: 400;
                    font-size: 14px;
                    align-self: center;
                    justify-self: end;
                    margin: 0px 20px;
                }

                @media only screen and (max-width: 1334px) {
                    footer {
                        align-items: flex-start;
                        justify-content: flex-start; 
                    }

                    p {
                        margin-top: -100px;
                    }
                }
            `}</style>
        </>
    )
}
Footer.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
export default withTranslation('common')(Footer);


