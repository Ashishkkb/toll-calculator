import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"
import logo1 from "../HomePage/assets/cards/logo1.svg"
const Challenges = () => {

    const CardsData = [
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
        {
            img: logo1,
            heading: "Sign Up",
            body: "Completes all the work associated with planning and processing"
        },
    ]
    return (
        <>
            <div className="grid grid-rows-2 mx-24  items-center">
                <div className='mx-auto text-6xl font-serif'>
                        Solve your <span className='font-semibold text-blue-600'>toll challenges</span> within minute
                </div>
                <div className='flex flex-row overflow-x-scroll hide-scrollbar bg-opacity-40 rounded-lg py-6 -mt-24 pb-20'>
                    <div className="flex flex-row justify-between gap-4">
                        {CardsData.map((card, index) => (
                            <div
                                key={index}
                                className=" bg-white flex flex-col px-10 py-11 rounded-lg items-start w-[370px] hover:scale-105 transition shadow-lg"
                            >
                                <Image
                                    loading="lazy"
                                    src={card.img}
                                    className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                                    alt="Challenges"
                                />
                                <div className="text-neutral-800 text-2xl font-semibold leading-9 self-stretch whitespace-nowrap mt-14">
                                    {card.heading}
                                </div>
                                <div className="text-stone-500 text-base leading-7 self-stretch mt-6">
                                    {card.body}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Challenges;