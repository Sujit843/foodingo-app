import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className=" footer ">  
      <footer
        className="
                    container
                    mx-auto
                    px-[2rem] lg:px-0
                    pt-[1.8rem] md:pt-[3rem] 
                    pb-[1.5rem]
                    grid
                    items-center
                    lg:grid-cols-2
                    
          "
      >
        <div className="">
          <div className="flex justify-start items-center text-black">
            <span
              className=" foodingo-txt
                      text-[2rem]
                      md:font-semibold
                      leading-none 
                      font-bold 
              "
            >
              Foodingo
            </span>
          </div>
          <p
            className=" foodingo-ptxt
                    text-[1.0rem]
                    tracking-wide
                    leading-[1.7rem]
                    mt-[0.8rem] lg:mt-[2.2rem]
                    
            "
          >
            "Delicious food, fast delivery, and a touch of love — that’s what we
            serve. Whether you're craving a quick bite or a full meal, we bring
            flavors that make every moment tasty and memorable. Your happiness
            is always on our menu!"
          </p>
          <div
            className="icons
                      cursor-pointer
                      pl-[7.5rem]
                      flex
                      gap-[2rem]
                      mt-[1.5rem] 
                      text-[1.8rem] 
                      text-blue-500"
          >
            <a href='https://m.facebook.com/?lid=0wrVGlo1dO5ODQ9OB&srlva=1'
            target="_blank" rel="https://m.facebook.com/?lid=0wrVGlo1dO5ODQ9OB&srlva=1">
            <FaFacebookF  />
            </a>
            <a href="https://www.instagram.com/"
            target="_balnk" rel="https://www.instagram.com/">
            <FaInstagram className="text-rose-700" />
            </a>
            <a href="https://www.whatsapp.com/"
            target="_blank" rel="https://www.whatsapp.com/">
            <FaWhatsapp className="text-green-700" />
            </a>
            <a href="https://x.com/"
            target="_blank" rel="https://x.com/">
            <FaTwitter />
            </a>
          </div>
        </div>
        <div
          className="
                    flex
                    justify-between l
                    h-full
                    gap-[10rem] "
        >
          <div className="flex flex-col gap-[0.2rem] gap-[1rem]">
            <h1 className="text-[1.8rem] ml-[4rem] font-semibold text-black ">
              Company
            </h1>
            <ul className=" flex flex-col gap-[0.8rem] ml-[5rem] pd-[1rem] text-[1.1rem] leading-[1.7rem]">
              <li>About</li>
              <li>Home</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start h-full">
            <div className="flex flex-col gap-[0.2rem] gap-[1rem]">
              <h1 className="text-[1.8rem] mr-[6rem] text-black md:font-semibold">
                Contact us:
              </h1>
              <span className="text-[1.1rem] mr-[5rem] ">
                +91 9999999999
              </span>
              <p className="text-[1.1rem] ">
                contact@sujit
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
