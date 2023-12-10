import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"
import Collapsible from './Collapsible';
import Plus from './plus';
import Minus from './minus';

const QuestionsAndAnswer = () => {
    return (
        <>
            <div className="grid grid-rows-2 mx-24 items-center -mt-24">
                <div className='mx-auto text-6xl font-serif'>
                    Your questions, answered
                </div>
                <div className="flex flex-col overflow-x-scroll hide-scrollbar bg-opacity-40 rounded-lg py-6 -mt-40">
                    <Collapsible
                        iconUp={<Plus height="30" width="30" color={"#407EE1"} />}
                        iconDown={<Minus height="30" width="30" color={"#407EE1"} />}
                        header={"Why are there toll gates in India?"}
                    >
                        <div className="p-4">
                            <p>
                                Toll gates exist in India to collect fees for the construction and maintenance of toll roads, highways, etc. These fees help fund the infrastructure, and toll gates serve as collection points for toll taxes.
                            </p>
                        </div>
                    </Collapsible>
                    <Collapsible
                        iconUp={<Plus height="30" width="30" color={"#407EE1"} />}
                        iconDown={<Minus height="30" width="30" color={"#407EE1"} />}
                        header={"Is toll free for local residents in India?"}
                    >
                        <div className="p-4">
                            <p>
                                While tolls are not entirely free for local residents, those living within a 20 km radius of toll plazas on national highways may be eligible for discounted rates[2]. TollGuru Toll API provides detailed information on local resident toll rates.
                            </p>
                        </div>
                    </Collapsible>
                    <Collapsible
                        iconUp={<Plus height="30" width="30" color={"#407EE1"} />}
                        iconDown={<Minus height="30" width="30" color={"#407EE1"} />}
                        header={"Is FASTag mandatory in India?"}
                    >
                        <div className="p-4">
                            <p>
                                FASTag is mandatory for all vehicles in India. If you travel without a FASTag on National Highways, you’ll have to pay double the toll fees. The Indian government is pushing towards making it mandatory across all the highways[3].
                            </p>
                        </div>
                    </Collapsible>

                    <Collapsible
                        iconUp={<Plus height="30" width="30" color={"#407EE1"} />}
                        iconDown={<Minus height="30" width="30" color={"#407EE1"} />}
                        header={"How are Indian tolls calculated?"}
                    >
                        <div className="p-4">
                            <p>
                                The amount of toll is determined based on the length of the stretch of toll road (usually 60 km). If this is less, you will be charged based on the actual length of the road. Other factors are infrastructure type (bridge, tunnel, bypass, etc.) and also the vehicle’s axle count, load, etc. You can calculate the toll for your trip across India using TollGuru Toll Calculator.
                            </p>
                        </div>
                    </Collapsible>

                    <Collapsible
                        iconUp={<Plus height="30" width="30" color={"#407EE1"} />}
                        iconDown={<Minus height="30" width="30" color={"#407EE1"} />}
                        header={"Is toll free after 3 minutes of wait Is FASTag mandatory in India?"}
                    >
                        <div className="p-4">
                            <p>
                                No, it is a myth that when waiting time exceeds 3 minutes on Indian toll plaza lanes, the toll will be exempted. However, if the length of the queue exceeds 100 m from the toll plaza, the driver will not have to pay the toll[4].
                            </p>
                        </div>
                    </Collapsible>
                    <Collapsible
                        iconUp={<Plus height="30" width="30" color={"#407EE1"} />}
                        iconDown={<Minus height="30" width="30" color={"#407EE1"} />}
                        header={"Calculate tolls and fuel cost to travel across India?"}
                    >
                        <div className="p-4">
                            <p>
                                Calculate routes, tolls, and fuel costs for your travel by car, jeep, van, SUV, truck, LCV, bus, and bike in India using TollGuru Trip Calculator. It also shows the cheapest, fastest, and other optimal routes to your destination along with toll plaza(s) location en route, payment methods, and more.
                            </p>
                            <a href="/tollCalculator" className="text-blue-600 underline mt-4">
                                Calculate Toll
                            </a>
                        </div>
                    </Collapsible>
                </div>
            </div>
        </>
    )
}

export default QuestionsAndAnswer;