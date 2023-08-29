import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="bg-[#FAFAFA] lg:h-[441px]">
      <div className="lg:px-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:justify-items-center py-20 pl-24">
            <div>
              <h2 className="text-[32.58px] text-black font-bold">Get In Touch</h2>
              <div className="mt-4">
                <p className="text-[19.1px] text-gray-500 w-[90%] font-montserrat">The quick fox jumps over the 
                      lazy dog</p>
                <div className="flex items-center space-x-6 mt-6">
                <p className="text-2xl text-[#23A6F0] font-bold cursor-pointer"><BsFacebook /></p>
                <p className="text-2xl text-[#23A6F0] font-bold cursor-pointer"><BsInstagram /></p>
                <p className="text-2xl text-[#23A6F0] font-bold cursor-pointer"><BsTwitter /></p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[32.58px] text-black font-bold">Company info</h2>
              <div className="flex flex-col space-y-2 mt-4 font-montserrat">
                <p className="text-[19.1px] text-gray-500 font-bold">About Us</p>
                <p className="text-[19.1px] text-gray-500 font-bold">Carrier</p>
                <p className="text-[19.1px] text-gray-500 font-bold">We are hiring</p>
                <p className="text-[19.1px] text-gray-500 font-bold">Blog</p>
              </div>
            </div>
            <div>
              <h2 className="text-[32.58px] text-black font-bold">Features</h2>
              <div className="flex flex-col space-y-2 mt-4 font-montserrat">
                <p className="text-[19.1px] text-gray-500 font-bold">Business Marketing</p>
                <p className="text-[19.1px] text-gray-500 font-bold">User Analytic</p>
                <p className="text-[19.1px] text-gray-500 font-bold">Live Chat</p>
                <p className="text-[19.1px] text-gray-500 font-bold">Unlimited Support</p>
              </div>
            </div>
            <div>
              <h2 className="text-[32.58px] text-black font-bold">Resources</h2>
              <div className="flex flex-col space-y-2 mt-4 font-montserrat">
                <p className="text-[19.1px] text-gray-500 font-bold">IOS & Android</p>
                <p className="text-[19.1px] text-gray-500 font-bold">Watch a Demo</p>
                <p className="text-[19.1px] text-gray-500 font-bold">Customers</p>
                <p className="text-[19.1px] text-gray-500 font-bold">API</p>
              </div>
            </div>
      </div>
    </div>
  );
}
