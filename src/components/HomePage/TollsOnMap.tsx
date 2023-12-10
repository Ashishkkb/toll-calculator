import  Image  from 'next/image';
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
                    <div className="text-black text-4xl font-extrabold leading-[56px] w-full max-md:max-w-full">
                        See tolls on any map
                    </div>
                    <div className="text-blue-500 text-lg leading-7 w-full mt-9 max-md:max-w-full">
                        <span className="text-black">Welcome to </span>
                        <span className="text-blue-500">Toll REST API </span>
                        <span className="text-black">decision engine that underpins the</span>
                        <span className="text-blue-500"> Toll calculator.</span>
                        <span className="text-black">
                            {" "}
                            The Toll API works with all mapping services and is now available for
                            50+ countries.
                            <br />
                            It is like having Google Toll API, Bing Toll API, TomTom Toll API or
                            Mapbox Toll API since you can send routes (polylines) from any of the
                            mapping services to Toll API and receive tolls for those routes. Since
                            we support all transponders, it is like querying for EZPass Toll API
                            or Sunpass Toll API. You will receive tolls specific to all toll tags
                            and passes throughout the world.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TollsOnMap;