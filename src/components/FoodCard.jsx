import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="h-[20rem] border-[0.2rem] border-red-400 rounded-[2rem] font-bold w-[225px] bg-white flex flex-col justify-center p-[1.1rem_1rem]  gap-[6px]">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-red-600 ">₹{price}</span>
      </div>
      <p className="text-[0.8rem] font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-2 text-yellow-400" /> {rating}
        </span>
        
      </div>
      <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="text-white p-[0.4rem_1.1rem] bg-red-500 hover:bg-red-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
    </div>
  );
};

export default FoodCard;
