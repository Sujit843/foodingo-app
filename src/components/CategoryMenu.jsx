import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { setSearch } from "../redux/slices/SearchSlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-[12rem] mt-[2rem]">
      <h3 className=" Most-dishes -text-xl font-semibold tracking-wide">
        Most Loved dishes near you
      </h3>
      <div className="flex justify-between items-center">
        <div className="my-2 text-[0.8rem] flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`px-3  py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white ${
              selectedCategory === "All" && "bg-red-500 text-white"
            }`}
          >
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white ${
                  selectedCategory === category && "bg-red-500 text-white"
                } `}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-2 border border-gray-500 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
