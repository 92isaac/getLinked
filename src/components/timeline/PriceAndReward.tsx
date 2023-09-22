import React from "react";
import { reward, trophy } from "../../assets/images";
import SlideUp from "../../anime/SlidesUp";
import SlideInLeft from "../../anime/SlideInLeft";
import SlideInRight from "../../anime/SlideInRight";
import { PurpleBg } from "../../utils/PurpleBg";

export const PriceAndReward: React.FC = () => {
  return (
    <div className=" border-t-[0.1px] border-[#2e2053]">
      <div className="flex pt-16 md:justify-end md:pr-20 px-5 items-center">
        <div className="relative text-center md:text-left mb-16 md:mb-0">
          <SlideUp>
          <h3 className="class-display font-bold text-lg md:text-2xl">
            Prices and
            <span className="block text-[#D434FE]">Reward</span>
          </h3>
          <p className="text-sm montserrat">
            Highlight of the prices or reward for winners and
            <br className="hidden md:block" /> for participant
          </p>
          </SlideUp>
        </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row justify-between items-center px-5 md:px-20 pb-10">
        <div className="flex-1 mb-16 md:mb-0 relative">
          <SlideInLeft>
          <img src={trophy} alt="trophy!" className="relative z-30"/>
          </SlideInLeft>
          <PurpleBg className="absolute -top-32 z-10 "/>
        </div>
        <div className="relative flex-1 text-center md:text-left ">
         <SlideInRight>
         <div>
            <img src={reward} alt="reward" />
          </div>
         </SlideInRight>
        </div>
      </div>
    </div>
  );
};
