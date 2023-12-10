import * as React from "react";
import facebook from "../HomePage/assets/footerlogo/facebook.svg"
import insta from "../HomePage/assets/footerlogo/insta.svg"
import twitter from "../HomePage/assets/footerlogo/twitter.svg"
import whiteFacebook from "../HomePage/assets/footerlogo/whiteFacebook.svg"
import whiteInsta from "../HomePage/assets/footerlogo/whiteInsta.svg"
import whiteTwitter from "../HomePage/assets/footerlogo/whiteTwitter.svg"
import Image from "next/image";


export default function Footer() {
    const [fflag ,setFflag] = React.useState(false)
    const [Tflag ,setTflag] = React.useState(false)
    const [Iflag ,setIflag] = React.useState(false)

    return (
        <div className="bg-slate-50 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
            <div className="flex w-[1172px] max-w-full flex-col mt-9">
                <div className="self-stretch flex w-full items-stretch justify-between gap-5 pr-1.5 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex basis-[0%] flex-col items-stretch">
                        <div className="text-blue-600 text-3xl font-bold leading-10 tracking-tighter whitespace-nowrap">
                            RoadFeeWizard
                        </div>
                        <div className="flex items-center justify-between gap-5 mt-6 pr-20 max-md:pr-5">
                            <div className="bg-white hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center" onMouseEnter={() => setFflag(true)} onMouseLeave={() => {setFflag(false)}}>
                                <Image
                                    loading="lazy"
                                    src={fflag ? whiteFacebook : facebook}
                                    className=""
                                    alt="Facebook"
                                    width={8}
                                    height={8}
                                />
                            </div>
                            <div className="bg-white hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center" onMouseEnter={() => setIflag(true)} onMouseLeave={() => {setIflag(false)}}>
                                <Image
                                    loading="lazy"
                                    src={Iflag ? whiteInsta : insta}
                                    className=""
                                    alt="Facebook"
                                    width={16}
                                    height={10}
                                />
                            </div>
                            <div className="bg-white hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center" onMouseEnter={() => setTflag(true)} onMouseLeave={() => {setTflag(false)}}>
                                <Image
                                    loading="lazy"
                                    src={Tflag ? whiteTwitter : twitter}
                                    className=""
                                    alt="Facebook"
                                    width={16}
                                    height={8}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="self-start max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col items-stretch max-md:mt-10">
                                    <div className="text-neutral-800 text-lg font-semibold leading-7 whitespace-nowrap">
                                        Company
                                    </div>
                                    <div className="text-stone-500 text-lg leading-7 whitespace-nowrap mt-10">
                                        Home
                                    </div>
                                    <div className="text-stone-500 text-lg leading-7 whitespace-nowrap mt-7">
                                        Toll Calculator
                                    </div>
                                    <div className="text-stone-500 text-lg leading-7 whitespace-nowrap mt-7">
                                        Toll Wiki
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-neutral-400 bg-opacity-60 self-stretch shrink-0 h-px mt-10 max-md:max-w-full max-md:mt-10" />
                <div className="self-stretch flex items-stretch justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="text-stone-500 text-base whitespace-nowrap">
                        Made by Ashish Kumar Behera
                    </div>
                    <div className="text-stone-500 text-right text-base whitespace-nowrap self-start">
                        Terms & Conditions
                    </div>
                </div>
            </div>
        </div>
    );
}


