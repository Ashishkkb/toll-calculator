import Headers from "../HomePage/Headers";
import Footer from "../HomePage/Footer";
import Hero from "./Hero";
import dynamic from "next/dynamic";
const MyMap = dynamic(() => import('./LeafletMap'), { ssr: false });

const MainToll = () => {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div>
                <Hero />
            </div>
            <div className="mb-20">
                <MyMap />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default MainToll;