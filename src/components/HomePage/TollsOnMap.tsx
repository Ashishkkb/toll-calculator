import Image from 'next/image';
import Tolls from "../HomePage/assets/Tolls.svg"

const TollsOnMap = () => {
    return (
        <>
            <div className="grid grid-cols-2 my-10 mx-24 gap-4 justify-center items-center">
                <div className='p-16'>
                    <Image
                        src={Tolls}
                        alt='Toll Image'
                    />
                </div>
                <div className="flex flex-col px-5">
                    <div className="text-black text-5xl font-extrabold leading-[64px] w-full max-md:max-w-full">
                        Explore Maps with Ease
                    </div>
                    <div className="text-blue-500 text-lg leading-7 w-full mt-9 max-md:max-w-full">
                        <span className="text-black">Discover the power of </span>
                        <span className="text-blue-500">Map Explorer API </span>
                        <span className="text-black">that fuels our innovative mapping solutions.</span>
                        <span className="text-blue-500"> Map Explorer API </span>
                        <span className="text-black">
                            {" "}
                            seamlessly integrates with your favorite mapping services and is now accessible
                            in over 60 countries.
                            <br />
                            Forget the hassle of multiple APIs – our unified API supports Google Maps, Bing Maps,
                            TomTom, and Mapbox. Whether you need route information or want to calculate tolls,
                            our API has you covered. With support for all transponders, {"it's"} like having an EZPass
                            Toll API or Sunpass Toll API at your fingertips.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TollsOnMap;