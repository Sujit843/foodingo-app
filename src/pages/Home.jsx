import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import HeroSection from "../components/HeroSection";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
    <div className="bg-rose-100 mb-3">
      <div className=" home-nav bg-rose-200 ">
        <Navbar />
      </div>
      <div className="bg-rose-100">
        <HeroSection />
        <Explore />
        <CategoryMenu />
        <FoodItems />
        <Cart />
      </div>
      <div className="bg-rose-200">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Home;
