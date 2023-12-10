import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"
import logo1 from "../HomePage/assets/cards/logo1.svg"
const Challenges = () => {

    const CardsData = [
        {
            img: logo1,
            heading: "Calculate accurate tolls",
            body: "Get the most up-to-date tolls considering the vehicle type, toll facility, load type, count of passengers, time of day, pay mode and more"
        },
        {
            img: logo1,
            heading: "Trip cost breakdown",
            body: "Along with tolls, get accurate total trip cost estimates factoring fuel, labour charges, permits, insurance, maintenance, and more."
        },
        {
            img: logo1,
            heading: "Demystify toll roads",
            body: "View toll plaza locations with comprehensive details like payment mode accepted, valid toll tags, toll rates, toll discounts, vehicle compliance etc."
        },
        {
            img: logo1,
            heading: "Compare routes",
            body: "See all logical routes to your destination - while hitting all waypoints - with their trip cost breakdown - tolls, fuel etc., tags required, and travel time."
        },
        {
            img: logo1,
            heading: "Optimal compliant route",
            body: "Travel on the suggested Cheapest or Fastest route calculated considering your vehicle’s compliance to save time or expenses"
        },
        {
            img: logo1,
            heading: "Payment methods",
            body: "Learn about all the accepted payment methods- cash, card, tags etc. and respective toll rates for each plaza to save the highest on tolls."
        },
        {
            img: logo1,
            heading: "Notified of incoming tolls",
            body: "Handy for trips with varying waypoints or contingency plans, the prompt notification of incoming toll plaza with details helps make last-minute saves."
        },
        {
            img: logo1,
            heading: "Instant post-trip toll billing",
            body: "Instead of waiting weeks on tolling agencies to revert with tolls by license plate, get instant tolls using GPS Tracks and Polyline."
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