import BannerLeft from "../shared/BannerLeft";

const CreativeStudio = () => {
    return (
        <>
            <section>
                <BannerLeft title="Creative Studio" />

                <div className="container">
                    <h1>ToDo</h1>
                </div>
            </section>

            <style jsx>{`
                section {
                    padding-top: 160px;
                    padding-bottom: 160px;
                }
            `}</style>
        </>
    )
}

export default CreativeStudio;