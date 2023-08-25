import React from "react";
import { AiOutlineDownload, AiOutlineBarChart, AiOutlineAreaChart } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillEye } from 'react-icons/ai';

export default function Courses() {
  return (
   <div className="bg-white">
     <div className="lg:w-[1004px] mx-auto">
      <div className="lg:h-[928px] lg:py-[160px] py-[100px]">
        <p className="text-[14px] font-bold text-sky-600">Practice Advice</p>
        <h2 className="text-[40px] font-bold mt-1 text-black">Watch our Courses</h2>
        <p className="text-[14px] mt-px text-gray-500">
          Problems trying to resolve the conflict between
          <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
          <div className="lg:w-[501px] w-[470px] bg-white flex group overflow-hidden transition">
            <div className="lg:w-[209px] w-full relative group overflow-hidden transition">
              <img
                className=" h-[400px] "
                src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt=""
              />
              <div className="absolute -bottom-[20%] group-hover:bottom-[6%] left-[15%] flex items-center justify-center space-x-3 transition-all duration-500">
                <div className="h-[40px] w-[40px] text-xl bg-white rounded-full flex items-center justify-center cursor-pointer"><AiOutlineHeart /></div>
                <div className="h-[40px] w-[40px] text-xl bg-white rounded-full flex items-center justify-center cursor-pointer"><AiOutlineShoppingCart /></div>
                <div className="h-[40px] w-[40px] text-xl bg-white rounded-full flex items-center justify-center cursor-pointer"><AiFillEye /></div>
              </div>
              <div className="absolute top-[20px] left-[20px] w-[51px] h-[24px] bg-[#E74040] text-center text-white text-[14px] font-bold rounded">
                Sale
              </div>
            </div>

            <div className="lg:w-[292px] pl-4 py-6">

              <div className="lg:w-[242px] flex justify-between">
                <p className="text-[14px] font-bold text-sky-500">
                  English Departement
                </p>
                <div className="bg-black rounded-xl px-1 mr-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400 h-4 w-4 mr-2"
                    /> <span className="text-white text-sm">4.9</span>
                  </div>
                </div>
              </div>
               
               <h1 className="text-[16px] font-bold my-3">Graphic Design</h1>
               <p className="text-[14px] lg:w-[242px] text-gray-400 mb-3">We focus on ergonomics and 
meeting you where you work. It's 
only a keystroke away.</p>
 
            <div className="flex text-[14px] font-bold items-center space-x-2 mb-6">
                <p><AiOutlineDownload /></p>
                <p className="text-gray-500">15 Sales</p>
                </div>            
                 
                 <p className="text-[16px] font-bold"><span className="text-gray-400">$16.48</span> <span className="text-[#40BB15]">$6.48</span></p>

              <div className="flex items-center space-x-2 mt-8">
                <p className="flex items-center gap-1 text-xs"><span className=" text-sky-500 "><BsStopwatch /></span> <span className="text-gray-400 ">22h...</span></p>
                <p className="flex items-center gap-1 text-xs"><span className=" text-[#E77C40] "><AiOutlineBarChart /></span> <span className="text-gray-400 ">64 Lessons</span></p>
                <p className="flex items-center gap-1 text-xs"><span className=" text-[#40BB15] "><AiOutlineAreaChart /></span> <span className="text-gray-400 ">Progress</span></p>
              </div>

              <button className="px-[20px] py-[10px] text-[14px] font-bold text-[#23A6F0] border border-[#23A6F0] rounded-full flex items-center gap-1 mt-8">Learn More <span className="text-xl"><FaAngleRight /></span></button>

            </div>
          </div>


          <div className="lg:w-[501px] w-[470px] bg-white flex group overflow-hidden transition">
            <div className="lg:w-[209px] w-full relative">
              <img
                className="h-[400px] "
                src="https://images.unsplash.com/photo-1543060829-a0029874b174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt=""
              />
              <div className="absolute -bottom-[20%] group-hover:bottom-[6%] left-[15%] flex items-center justify-center space-x-3 transition-all duration-500">
                <div className="h-[40px] w-[40px] text-xl bg-white rounded-full flex items-center justify-center cursor-pointer"><AiOutlineHeart /></div>
                <div className="h-[40px] w-[40px] text-xl bg-white rounded-full flex items-center justify-center cursor-pointer"><AiOutlineShoppingCart /></div>
                <div className="h-[40px] w-[40px] text-xl bg-white rounded-full flex items-center justify-center cursor-pointer"><AiFillEye /></div>
              </div>
              <div className="absolute top-[20px] left-[20px] w-[51px] h-[24px] bg-[#E74040] text-center text-white text-[14px] font-bold rounded">
                Sale
              </div>
            </div>

            <div className="lg:w-[292px] pl-4 py-6">

              <div className="lg:w-[242px] flex justify-between">
                <p className="text-[14px] font-bold text-sky-500">
                  English Departement
                </p>
                <div className="bg-black rounded-xl px-1 mr-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400 h-4 w-4 mr-2"
                    /> <span className="text-white text-sm">4.9</span>
                  </div>
                </div>
              </div>
               
               <h1 className="text-[16px] font-bold my-3">Graphic Design</h1>
               <p className="text-[14px] lg:w-[242px] text-gray-400 mb-3">We focus on ergonomics and 
meeting you where you work. It's 
only a keystroke away.</p>
 
            <div className="flex text-[14px] font-bold items-center space-x-2 mb-6">
                <p><AiOutlineDownload /></p>
                <p className="text-gray-500">15 Sales</p>
                </div>            
                 
                 <p className="text-[16px] font-bold"><span className="text-gray-400">$16.48</span> <span className="text-[#40BB15]">$6.48</span></p>

              <div className="flex items-center space-x-2 mt-8">
                <p className="flex items-center gap-1 text-xs"><span className=" text-sky-500 "><BsStopwatch /></span> <span className="text-gray-400 ">22h...</span></p>
                <p className="flex items-center gap-1 text-xs"><span className=" text-[#E77C40] "><AiOutlineBarChart /></span> <span className="text-gray-400 ">64 Lessons</span></p>
                <p className="flex items-center gap-1 text-xs"><span className=" text-[#40BB15] "><AiOutlineAreaChart /></span> <span className="text-gray-400 ">Progress</span></p>
              </div>

              <button className="px-[20px] py-[10px] text-[14px] font-bold text-[#23A6F0] border border-[#23A6F0] rounded-full flex items-center gap-1 mt-8">Learn More <span className="text-xl"><FaAngleRight /></span></button>

            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
