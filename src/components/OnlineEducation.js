import React from "react";
import bg from "../../src/assets/Images/Rectangle.png"
import mainImg from "../../src/assets/Images/technology 1.png"
import img1 from "../../src/assets/Images/image 1.png"
import img3 from "../../src/assets/Images/image 3.png"
import rectangle from "../../src/assets/Images/Rectangle 52.png"
import rectangle2 from "../../src/assets/Images/Rectangle 53.png"

export default function OnlineEducation() {
  return (
    <div className="bg-white">
      <div className="lg:w-[1045px] mx-auto">
      <div className="lg:h-[761px] lg:py-[160px] py-[30px]">
            <div className="lg:flex justify-between items-center">
            <div className="h-[441px] lg:w-[508px] md:w-[508px] w-[408px] relative mx-auto">
            <div className="lg:w-[337.671px] md:w-[337.671px] w-[200px] h-[347.826px] absolute lg:left-[12.5%] md:left-[12.5%] left-[2%]">
            <div className="relative">
            <img
              src={bg}
              className="" alt=""
            />
            <div className="absolute left-[-4%] top-[87%]">
            <img
              src={rectangle2}
              className="" alt=""
            />
            </div>
            <div className="w-[376.939px] h-[440.611px] absolute left-[4%] md:top-[-13%] lg:top-[-13%] top-[-25%]">
            <img
              src={mainImg}
              className="" alt=""
            />
            </div>
            <div className="w-[362px] h-[110px] absolute left-[11%] md:left-[25%] lg:left-[25%] top-[128%] md:top-[77%] lg:top-[77%]">
            <img
              src={img1}
              className="" alt=""
            />
            </div>
            <div className="w-[158px] h-[158px] absolute md:left-[84%] lg:left-[84%] left-[120%] top-[2%]">
            <img
              src={img3}
              className="" alt=""
            />
            </div>
            <div className="w-[53.316px] h-[53.316px] absolute left-[-19%] top-[0%] hidden md:block lg:block">
            <img
              src={rectangle}
              className="" alt=""
            />
            </div>
            </div>
            </div>
            </div>

            <div className="h-[441px] lg:w-[508px] md:w-[508px] w-[408px] mx-auto">
            <div className="w-[382px] h-[296px] py-4 md:py-4 lg:py-12 pl-16 md:pl-28 lg:pl-44">
              <div className="w-24 h-2 bg-red-500 hidden lg:block"></div>
              <h2 className="text-[40px] w-[259px] font-montserrat font-bold py-9 leading-10 text-black">
                Make online education
              </h2>
              <p className="text-[14px] leading-5 w-[351px] text-gray-500">
                Problems trying to resolve the conflict between <br/> the two major
                realms of Classical physics:<br/> Newtonian mechanics{" "}
              </p>
              <p className="text-[14px] font-bold leading-5 mt-9 text-sky-500">
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
