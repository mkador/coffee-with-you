import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/home/logoMain.png";

const Navbar = () => {
  const navlinks = (
    <div className="text-orange-500 flex">
      <NavLink to="/" className="mr-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
        Home
      </NavLink>
      <NavLink to="/menu" className="mr-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
        Menu
      </NavLink>
      <NavLink to="/orderFood/salad" className="mr-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
        Order
      </NavLink>
     
    </div>
  );
  return (
    <div className=" max-w-screen-lg font-mono  navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navlinks}
          </ul>
        </div>
        <Link>
          <img className=" w-20 h-20 hover:scale-125 transition-all duration-500 cursor-pointer" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end flex">
        
        <NavLink to="/login" className="mr-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
        Login
      </NavLink>
      <button className="btn btn-outline btn-warning ml-3">Buy Now</button>
      </div>
    </div>
  );
};

export default Navbar;
