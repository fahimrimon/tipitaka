import React from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Navbar = () => {

  const menuItems = (
    <>
      <li className="text-[14px] font-bold text-gray-500">
        <a href="/">Home</a>
      </li>
      <li className="text-[14px] font-bold text-gray-500">
        <a href="/">Services</a>
      </li>
      <li className="text-[14px] font-bold text-gray-500">
        <a href="/">Pricing</a>
      </li>
      <li className="text-[14px] font-bold text-gray-500">
        <a href="/">Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white pt-4">
      <div className="navbar-start lg:pl-[200px] lg:py-6">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-black font-bold normal-case text-[24px]" href="/">TipiTaka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-black menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end  lg:pr-[200px]">
        <ul className="font-bold menu menu-horizontal p-0">
        <li className="text-sky-500 text-[14px] pr-6">
        <a href="/">Login</a>
      </li>
        <li className="text-white text-[14px] font-bold bg-sky-500 hover:text-white rounded">
        <a href="/">Get a qoute <AiOutlineArrowRight /></a>
      </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
