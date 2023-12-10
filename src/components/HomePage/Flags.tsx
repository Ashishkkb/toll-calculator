import { useEffect } from "react";
import Flag1 from "../HomePage/assets/Flag1.svg"
import Flag2 from "../HomePage/assets/Flag2.svg"
import Image from 'next/image';

const Flags = () => {

    return (
        <>
            <div className="scrolling-container">
                <div className="flex flex-col mx-24 items-center py-20 min-h-[600px]">
                    <div className='mx-auto text-5xl font-sans text-white font-bold -mt-4'>
                        Complete toll coverage across 50+ countries
                    </div>
                    <div className='mx-auto  font-sans text-white text-center mt-4 justify-center'>
                        Our Toll API is the right fit for global businesses with complete toll coverage for 50+ countries across North America, Latin America, Europe <br /> (Including Russian Federation), Australia, New Zealand, and India.<br />
                    </div>
                    <div className="w-max banner">
                        <Image
                            src={Flag1}
                            className="w-max mt-16"
                            alt={"flag1"}
                        />
                    </div>
                    <div className="w-max banner2nd">
                        <Image
                            src={Flag2}
                            className="w-max mt-10"
                            alt={"flag1"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flags;