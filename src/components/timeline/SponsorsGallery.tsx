import React from "react";
import { liberty1, liberty2, winwise3, wisper4, Paybox, Visual6 } from "../../assets/images";

export const SponsorsGallery: React.FC = () => {
  return (
    <div className="w-[90%] md:w-[50%] grid grid-cols-3 place-items-center gap-0 mt-5 mx-auto">
      <div className="w-full border-[#D434FE] border-b-2 border-r-2 ">
        <div className="mx-auto my-10">
            <img src={liberty1} alt="libert logo 1" className="object-contain aspect-video mx-auto w-2/3"/>
        </div>
      </div>
      <div className="w-full border-[#D434FE] border-b-2 border-r-2 ">
            <div className="mx-auto my-10">
            <img src={liberty2} alt="libert logo 1" className="object-contain aspect-video mx-auto w-2/3"/>
        </div>
      </div>
      <div className="w-full border-[#D434FE] border-b-2 ">
            <div className="mx-auto my-10">
            <img src={winwise3} alt="libert logo 1" className="object-contain aspect-video mx-auto w-2/3"/>
        </div>
      </div>
      <div className="w-full border-[#D434FE] border-t-2 border-r-2 ">
            <div className="mx-auto my-10">
            <img src={wisper4} alt="libert logo 1" className="object-contain aspect-video mx-auto w-2/3"/>
        </div>
      </div>
      <div className="w-full border-[#D434FE] border-t-2 border-r-2 ">
            <div className="mx-auto my-10">
            <img src={Paybox} alt="libert logo 1" className="object-contain aspect-video mx-auto w-2/3"/>
        </div>
      </div>
      <div className="w-full border-[#D434FE] border-t-2 ">
            <div className="mx-auto my-10">
            <img src={Visual6} alt="libert logo 1" className="object-contain aspect-video mx-auto w-2/3"/>
        </div>
      </div>
    </div>
  );
};
