import * as React from "react";
// import Herobg from "../HomePage/assets/Herobg.svg";
import HeroBg from "../HomePage/assets/HeroBg.png";
import Image from "next/image";

export default function Hero() {


  return (
    <div className=" justify-center items-center Hero-Background">
      <div className="relative font-sans p-8 rounded-lg ml-32">
        <div className="flex flex-col items-start">
          <div className="text-white text-6xl font-bold tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Toll Calculation, <br /> Toll Tracking and <br />Toll Billing
          </div>
          <div className="text-white text-opacity-80 text-xl font-medium leading-8 self-stretch w-full mt-8 max-md:max-w-full list-disc ml-6">
            <ul className="list-disc">
              <li>Calculate precise toll costs</li>
              <li>Choose the toll optimal routes for your fleet</li>
              <li>More savings, happy customers</li>
            </ul>
          </div>
          <button className="px-8 py-3 bg-white rounded-full font-bold text-blue-600 mt-12 hover:scale-105 transition">
            <div className="justify-center flex flex-row gap-2 items-center">
              <div>Free Demo</div>
              <div className="font-extrabold text-lg">→</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
