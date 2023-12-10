import Headers from "../HomePage/Headers";
import Footer from "../HomePage/Footer";
import Hero from "./Hero"
import TollGuide from "./TollGuide";

const MainWiki = () => {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div>
                <Hero />
            </div>
            <div>
                <TollGuide />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MainWiki;