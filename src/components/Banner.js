import React from "react";

export default function Banner() {
  return (
    <div className="bg-white">
      <div className="lg:mx-[435px] flex justify-center">
      <div className="lg:w-[686px] p-[40px] lg:h-[720px]">
        <div className="text-center">
          <p className="mt-[24px] text-[16px] text-sky-500 font-bold leading-6 pt-8">
            Welcome
          </p>
          <h1 className="text-[58px] font-bold leading-20 lg:px-24 mt-8 text-black">
            Know how to sell product
          </h1>
          <p className="text-[20px] leading-7 px-20 mt-8 font-sans text-gray-500">
            We know how to impress customer that influence them to buy the
            product
          </p>
          <div className="mt-8 flex flex-row justify-center space-x-3">
            <button className="bg-sky-500 px-[40px] py-[15px] text-[14px] font-bold text-white rounded">Get a Qoute</button>
            <button className="border border-sky-500 px-[40px] py-[15px] text-[14px] font-bold text-sky-500 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
