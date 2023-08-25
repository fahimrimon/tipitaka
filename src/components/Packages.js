import React from "react";
import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineDatabase } from 'react-icons/hi';

export default function Packages() {
  return (
    <div className="bg-white">
      <div className="lg:mx-[435px] flex justify-center">
      <div className="lg:h-[616px] py-[160px]">
        <div className="lg:flex gap-[30px]">
          <div className="w-full">
            <div className="w-24 h-2 bg-red-500"></div>
            <h2 className="text-[40px] font-bold py-7 leading-10 text-black">
              Packages that are aprodable
            </h2>
            <p className="text-[14px] leading-5 text-gray-500">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
            <p className="text-[14px] font-bold leading-5 mt-7 text-sky-500">
              Learn More {">"}
            </p>
          </div>
          <div className="w-full my-10">
            <div className="flex">
                <div className="w-[239px] pl-8">
                    <div className="text-white bg-red-500 w-16 py-[22px] px-[19px] text-2xl rounded-lg">
                    <AiOutlineLink />
                    </div>
                <h1 className="text-[16px] font-bold leading-6 mt-3 text-black">Sales Planning</h1>
            <div className="w-12 h-0.5 bg-red-500 my-4"></div>
            <p className="w-[132px] text-[14px] text-gray-500">The gradual accumulation of information about</p>
                </div>

                <div className="w-[239px] pl-8">
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
