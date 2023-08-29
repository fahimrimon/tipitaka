import React from "react";

export default function JoinUs() {
  return (
   <div className="bg-white">
     <div className="lg:mx-[435px] flex justify-center">
      <div className="lg:h-[594px] lg:py-[160px] py-[100px]">
        <div className="lg:w-[492px] text-center">
          <p className="text-[14px] font-bold text-sky-500">Practice Advice</p>
          <p className="text-[40px] font-bold my-2 text-black">JOIN US</p>
          <p className="text-[14px] text-gray-400 font-montserrat">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="flex mt-12">
          <div className="w-full">
          <input type="text" placeholder="Your Email" className="input input-bordered w-full bg-gray-100 text-black" />
          </div>
          <button className="w-[20%] bg-[#23A6F0] text-white text-[14px] rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
