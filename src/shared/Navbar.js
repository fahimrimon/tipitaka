import React from "react";
const Navbar = () => {

  const menuItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Services</a>
      </li>
      <li>
        <a href="/">Pricing</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white pt-4">
      <div className="navbar-start lg:pl-[321px]">
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
        <a className="btn btn-ghost text-black font-bold normal-case text-[24px]">TipiTaka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-black menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end hidden lg:flex lg:pr-[321px]">
        <ul className="font-bold menu menu-horizontal p-0">
        <li className="text-sky-500">
        <a href="/">Login</a>
      </li>
        <li className="text-white bg-sky-500 rounded">
        <a href="/">Get a qoute {"->"}</a>
      </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
