import React from "react";
import TextType from "/ReactBits/TextType/TextType.jsx";

const HeroSection = () => {
  return (
    <div className="px-[16rem]">
      <div className="px-[3rem] flex justify-center items-center containerHero rounded-[2rem] w-full h-[35rem] ">
        <div className="">
        <TextType
          text={["Craving Something Tasty? We’ve Got You Covered!", "Fresh, Fast & Flavorsome – Order Now!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className='font-semibold text-[3rem]  h-[20rem]'
        />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
