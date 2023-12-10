import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"
import logo1 from "../HomePage/assets/cards/logo1.svg"
import cash from "../HomePage/assets/cards/cash.svg"
import fileInvoice from "../HomePage/assets/cards/fileInvoice.svg"
import reportMoney from "../HomePage/assets/cards/reportMoney.svg"
import road from "../HomePage/assets/cards/road.svg"
import route from "../HomePage/assets/cards/route.svg"
import vector from "../HomePage/assets/cards/vector.svg"
import vector2 from "../HomePage/assets/cards/vector2.svg"

const Challenges = () => {

    const CardsData = [
        {
            img: logo1,
            heading: "Accurate Toll Calculations",
            body: "Receive precise toll estimates considering factors such as vehicle type, toll facility, passenger count, time of day, and payment mode."
        },
        {
            img: cash,
            heading: "Comprehensive Trip Cost ",
            body: "Get detailed trip cost breakdowns, including tolls, fuel expenses, labor charges, permits, insurance, and maintenance costs."
        },
        {
            img: vector,
            heading: "Explore Toll Roads",
            body: "Discover toll plaza locations with detailed information on accepted payment modes, valid toll tags, toll rates, discounts, and vehicle compliance."
        },
        {
            img: vector2,
            heading: "Route Comparison",
            body: "Compare logical routes to your destination, including waypoints, trip cost breakdowns (tolls, fuel, etc.), required toll tags, and travel times."
        },
        {
            img: route,
            heading: "Optimal Compliant Routes",
            body: "Travel on the suggested cheapest or fastest routes, taking into account your vehicle's compliance to save time or expenses."
        },
        {
            img: reportMoney,
            heading: "Accepted Payment Methods",
            body: "Explore all accepted payment methods, including cash, card, toll tags, and respective toll rates for each plaza to optimize toll expenses."
        },
        {
            img: fileInvoice,
            heading: "Real-time Toll Notifications",
            body: "Receive timely notifications of upcoming toll plazas, ideal for trips with varying waypoints or contingency plans, enabling last-minute adjustments."
        },
        {
            img: road,
            heading: "Instant Post-Trip Toll Billing",
            body: "Avoid waiting for weeks for tolling agencies to provide tolls by license plate. Get instant tolls using GPS tracks and polyline data."
        },
    ];
    
    return (
        <>
            <div className="grid grid-rows-2 mx-24  items-center">
                <div className='mx-auto text-6xl font-sans'>
                Overcome Your <span className='font-bold text-blue-500'>Toll Challenges </span>in Minutes
                </div>
                <div className='flex flex-row overflow-x-scroll hide-scrollbar bg-opacity-40 rounded-lg py-6 -mt-24 pb-20'>
                    <div className="flex flex-row justify-between gap-4">
                        {CardsData.map((card, index) => (
                            <div
                                key={index}
                                className=" bg-white flex flex-col px-10 py-11 rounded-lg items-start w-[370px] hover:scale-105 transition border border-gray-300"
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