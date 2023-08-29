import React from "react";
import img1 from "../../src/assets/Images/testimonial1.png"
import img2 from "../../src/assets/Images/testimonial2.png"

export default function Testimonial() {
  return (
    <div className="bg-white">
      <div className="lg:h-[988px] bg-[#B2E3FF]">
      <div className=" lg:py-[160px] py-[60px] lg:w-[1052px] mx-auto">
        <div className="h-[134px] flex flex-col gap-2.5 ml-4 lg:ml-0">
        <p className="text-[14px] font-bold text-sky-600">Practice Advice</p>
        <h2 className="text-[40px] font-bold text-black">
          Each and every client is important.
        </h2>
        <p className="text-[14px] text-gray-500">
          Problems trying to resolve the conflict between
          <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
        </div>

        {/* <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-3.5 justify-items-center"> */}
        <div className="mt-24 lg:flex items-center justify-center gap-3.5">
          <div className="h-[438.01px] w-1 bg-white"></div>
          <div className="lg:w-[501px] w-[400px] h-[438.01px] bg-white flex flex-col items-center justify-center">
            <img className="h-[128px] w-[128px] rounded-full mb-6" src={img1} alt="" />
            <p style={{letterSpacing: "0.2px", lineHeight:"20px"}} className="text-[14px] w-[159px] font-montserrat font-normal text-gray-500 text-center">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating my-4">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
              
              <p className="text-[16px] font-bold">Regina Miles</p>
              <p className="text-[14px] font-bold text-gray-400 mt-1">Designer</p>
          </div>

          <div className="lg:w-[501px] w-[400px] h-[438.01px] bg-white flex flex-col items-center justify-center">
          <img className="h-[128px] w-[128px] rounded-full mb-6" src={img2} alt="" />
            <p style={{letterSpacing: "0.2px", lineHeight:"20px"}} className="text-[14px] w-[159px] font-montserrat font-normal text-gray-500 text-center">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="rating my-4">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
              
              <p className="text-[16px] font-bold">Regina Miles</p>
              <p className="text-[14px] text-gray-400 font-bold mt-1">Designer</p>
          </div>
          <div className="h-[438.01px] w-1 bg-white"></div>
        </div>

        
      </div>
    </div>
    </div>
  );
}
