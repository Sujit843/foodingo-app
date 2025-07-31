import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Payment = () => {
    const [loading, setLoading] = useState(false)
     useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);
    return (
         <div className="">
          <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[28rem] h-[36rem] bg-blue-400 top-[20%] rounded-[1rem] p-[1.2rem_1.8rem] ">
              <h1 className="text-[2rem] font-semibold text-white mt-4">
                Payment details
              </h1>
              <div className="signin flex justify-center items-center flex-col gap-[1.1rem] mt-4">
                <input
                  type="text"
                  placeholder="Card holder name"
                  id="name"
                  className=" p-[0.5rem_0.7rem] w-full bg-black rounded-xl outline-none text-white"
                />
                <input
                  type="card number"
                  placeholder="card number"
                  id="name"
                  className=" p-[0.7rem_0.9rem] w-full bg-black rounded-xl outline-none text-white"
                />
                <input
                  type="text"
                  placeholder="cvv"
                  id="name"
                  className="p-[0.5rem_0.7rem] w-full bg-black rounded-xl outline-none text-white"
                />
                <input
                  type="text"
                  placeholder="bank name"
                  id="name"
                  className="p-[0.5rem_0.7rem] w-full bg-black rounded-xl outline-none text-white"
                />
                <input
                  type="text"
                  placeholder="expiry date"
                  id="name"
                  className="p-[0.5rem_0.7rem] w-full bg-black rounded-xl outline-none text-white"
                />
                <textarea
                  id="address"
                  name="billing_address"
                  rows="3"
                  cols="30" required
                  placeholder=" enter billing_address"
                  className="p-[0.7rem_0.7rem] w-full bg-black rounded-xl outline-none text-white"
                />
                {/* <input type="text" placeholder="enter username.." id="name" className="bg-transparent p-[0.7rem_0.9rem] w-full bg-black rounded-xl outline-none text-white" /> */}
                <NavLink to="/final">
                    <button className="flex items-center justify-center w-[11rem] h-[3rem] p-[1rem_1.3rem] bg-black text-white rounded-full">
                  submit
                </button>  </NavLink>             
              </div>
            </div>
          </div>
          
        </div>
    )
}

export default Payment;