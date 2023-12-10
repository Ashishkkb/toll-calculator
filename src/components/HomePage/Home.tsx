import Hero from "./Hero"
import TollsOnMap from "./TollsOnMap";
import Challenges from "./Challenges";
import QuestionsAndAnswer from "./QuestionsAndAnswer";
import Flags from './Flags';
import LogosBg from "./LogosBg";
import Footer from './Footer';
import Headers from './Headers';



const HomeMain = () => {
    return (
        <>
            <div>
                <Headers />
            </div>
            <div>
                <Hero />
            </div>
            <div className="">
                <TollsOnMap />
            </div>
            <div className="bg-[#F7F8FC]">
                <Challenges />
            </div>
            <div className="">
                <QuestionsAndAnswer />
            </div>
            <div className="flag-bg">
                <Flags />
            </div>
            <div className="logo-bg">
                <LogosBg />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default HomeMain;