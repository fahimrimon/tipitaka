import React from "react";

export default function OnlineEducation() {
  return (
    <div className="bg-white">
      <div className="lg:mx-[435px] flex justify-center">
      <div className="lg:h-[616px] w-[1050px] lg:py-[160px]">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row space-x-20">
            <img
              src="https://www.kindpng.com/picc/m/419-4198380_man-laptop-working-vector-png-transparent-png.png"
              className="lg:w-[300px] lg:h-[300px] min-w-sm" alt=""
            />
            <div className="">
              <div className="w-24 h-2 bg-red-500"></div>
              <h2 className="text-[40px] font-bold py-7 leading-10 text-black">
                Make online education
              </h2>
              <p className="text-[14px] leading-5 w-[351px] text-gray-500">
                Problems trying to resolve the conflict between <br/> the two major
                realms of Classical physics:<br/> Newtonian mechanics{" "}
              </p>
              <p className="text-[14px] font-bold leading-5 mt-7 text-sky-500">
                Learn More {">"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
