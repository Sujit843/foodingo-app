import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mx-[16rem] mb-8 flex flex-col lg:flex-row justify-between py-4 items-center ">
      <div className="flex items-center gap-[20rem]">    
        <h1 className="text-5xl flex items-center  font-bold flex">
          Foodingo{" "}
          <img
            src="src\assets\cheese-burger-generative-ai-png.png"
            alt=""
            className="w-[4rem] h-[4rem]"
          />
        </h1>
        <h3 className="text-xl font-bold text-gray-600 underline">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
      <div>
        <NavLink to="/signin">
          <button className="bg-rose-400 hover:bg-rose-600 0.5s ease-in p-[0.5rem_1.5rem] rounded-full text-white font-semibold">
            Log In
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className=" ml-[1rem] hover:bg-rose-600 0.5s ease-in bg-rose-400 p-[0.5rem_1.5rem] rounded-full text-white font-semibold">
            Sign Up
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
