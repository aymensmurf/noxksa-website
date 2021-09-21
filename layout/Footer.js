const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid">
                    <img src="/img/footer.png" alt="Nox Ksa" />

                    <p>© Copyright 2020 Ktheeb Company. All Rights Reserved.</p>
                </div>
            </footer>

            <style jsx>{`
                footer {
                    padding-top: 100px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                }

                img {
                    width: 100%;
                    object-fit: contain;
                }

                p {
                    color: #463568;
                    font-weight: 400;
                    font-size: 14px;
                    align-self: center;
                    justify-self: end;
                    margin: 0px 20px;
                }
            `}</style>
        </>
    )
}

export default Footer;