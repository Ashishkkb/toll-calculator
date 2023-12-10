import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"
import logo1 from "../HomePage/assets/cards/logo1.svg"
const LogosBg = () => {

    return (
        <>
            <div className="flex flex-col mx-24 items-center py-20 min-h-[561px]">
                <div className='mx-auto text-5xl font-sans text-black font-bold text-center'>
                    Add <span className='text-blue-600'>toll intelligence</span> that <br /> powers millions trips <br /> everyday
                </div>
                <div className='mx-auto text-2xl  font-sans text-black text-center mt-4  justify-center'>
                    The world’s largest companies trust <br />TollGuru. Are you ready to join them?
                </div>
            </div>
        </>
    )
}

export default LogosBg;