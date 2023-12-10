import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"
import logo1 from "../HomePage/assets/cards/logo1.svg"
const Flags = () => {

    return (
        <>
            <div className="flex flex-col mx-24 items-center py-20 min-h-[600px]">
                <div className='mx-auto text-5xl font-serif text-white font-bold'>
                    Complete toll coverage across 50+ countries
                </div>
                <div className='mx-auto  font-serif text-white text-center mt-4  justify-center'>
                    Our Toll API is the right fit for global businesses with complete toll coverage for 50+ countries across North America, Latin America, Europe <br /> (Including Russian Federation), Australia, New Zealand, and India.<br />
                    Click on the links below to refer to the Toll API docs for the respective region/ country.
                </div>
            </div>
        </>
    )
}

export default Flags;