import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mx-[16rem] mb-8 flex flex-col lg:flex-row justify-between py-4 items-center ">
      <div className="flex items-center gap-[12rem]">    
        <h1 className="text-2xl flex items-center  font-bold flex">
          Foodingo{" "}
          <img
            src="/images/cheese.png"
            alt=""
            className="w-[2rem] h-[2rem]"
          />
        </h1>
        <h3 className="text-[1.2rem] flex font-bold text-gray-600 underline">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
      <div>
        <NavLink to="/signin">
          <button className="bg-rose-400 ml-[0.4rem] hover:bg-rose-600 0.5s ease-in p-[0.2rem_1.1rem] rounded-full text-white font-semibold">
            Log In
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className=" ml-[1rem] hover:bg-rose-600 0.5s ease-in bg-rose-400 p-[0.2rem_1.1rem] rounded-full text-white font-semibold">
            Sign Up
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
