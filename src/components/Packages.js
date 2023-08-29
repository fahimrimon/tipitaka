import React from "react";
import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineDatabase } from 'react-icons/hi';

export default function Packages() {
  return (
    <div className="bg-white">
      <div className="lg:w-[1050px] mx-auto">
      <div className="lg:h-[616px] lg:py-[160px] py-[100px]">
        <div className="lg:flex lg:gap-[30px]">
          <div className="lg:w-[507px] md:w-[507px] w-[407px] h-[296px] mx-auto">
            <div className="w-24 h-2 bg-red-500 hidden lg:block"></div>
            <div className="w-[378px] py-9">
            <h2 className="text-[40px] font-bold leading-10 text-black">
              Packages that are aprodable
            </h2>
            </div>
            <div className="w-[310px] pb-8">
            <p className="text-[14px] leading-5 text-gray-400">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
            </div>
            <p className="text-[14px] font-bold leading-5 text-sky-500">
              Learn More {">"}
            </p>
          </div>
          <div className="lg:w-[508px] md:w-[508px] w-[408px] h-[292px] mx-auto lg:bg-gray-50">
            <div className="flex space-x-8">
                <div className="lg:w-[239px] h-[292px] pl-8 py-10 bg-white">
                    <div className="text-white bg-red-500 w-16 py-[22px] px-[19px] text-2xl rounded-lg">
                    <AiOutlineLink />
                    </div>
                <h1 className="text-[16px] font-bold leading-6 mt-3 text-black">Sales Planning</h1>
            <div className="w-12 h-0.5 bg-red-500 my-4"></div>
            <p className="w-[132px] text-[14px] text-gray-500">The gradual accumulation of information about</p>
                </div>

                <div className="lg:w-[239px] h-[292px] pl-8 py-10 bg-white">
                <div className="text-white bg-red-500 w-16 py-[22px] px-[19px] text-2xl rounded-lg">
                    <HiOutlineDatabase />
                    </div>
                <h1 className="text-[16px] font-bold leading-6 mt-3 text-black">Market Analysis</h1>
            <div className="w-12 h-0.5 bg-red-500 my-4"></div>
            <p className="w-[132px] text-[14px] text-gray-500">The gradual accumulation of information about</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
