import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {



  return (
    
    <div className="w-full bg-white h-[100vh] flex justify-center items-center">
      <div className="w-[25rem] border-[0.3rem] border-rose-600 h-[28rem]  top-[20%] rounded-[2rem] p-[1.4rem_2rem] ">
        <h1 className="text-[3rem] text-rose-500 font-semibold text-rose mt-4">Log In</h1>
        <div className="signin flex justify-center items-center flex-col gap-[1.6rem] mt-4 text-black">
          <input type="email" placeholder="enter mail" className="rounded-tl-[0.7rem] rounded-tr-[0.7rem] bg-rose-100 p-[0.7rem_0.9rem] w-full  border-b-[0.2rem] border-rose-500 outline-none text-rose-600" />
          <input type="password" placeholder="password" className="rounded-tl-[0.7rem] rounded-tr-[0.7rem] bg-rose-100 p-[0.7rem_0.9rem] w-full  border-b-[0.2rem] border-rose-500 outline-none text-rose-600" />
  
          <button className="mt-6 flex items-center justify-center p-[0.4rem_3rem]  bg-rose-600 text-white rounded-full text-[1.2rem] font-semibold">Log In</button>
         <p >Create a new account ? <NavLink to="/register"><button className="font-semibold">Click Here</button></NavLink></p>
        </div>
      </div>
    </div>
    
  );
};

export default SignIn;
