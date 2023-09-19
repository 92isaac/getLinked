import React from "react";
import { manWearGlass, starBall, title, underLine } from "../../assets/images";
import { Button } from "../../utils/Button";
import { Countdowm } from "./Countdowm";

export const HeroSection: React.FC = () => {
  return (
    <section className="md:pl-20">
      <div className="flex md:justify-end justify-center text-white">
        <div className="md:pr-10">
          <h3 className="md:text-2xl font-bold italic">
            Igniting a Revolution in HR Innovation
          </h3>
          <img
            src={underLine}
            alt="hero underline"
            className="w-1/2 float-right"
          />
        </div>
      </div>
      <div className="md:flex justify-between montserrat">
        <div className="text-center md:text-left  pt-10 px-5 md:px-0">
          <img src={title} alt="" className="mx-auto" />
          <p className="text-xs">
            Participate in getlinked tech Hackathon 2023 stand
            <br className="hidden md:block"/> a chance to win a Big prize
          </p>
          <Button title="Register" className="mt-4 pt-2" OnClick />
          <Countdowm className={`mt-5 md:mt-16 justify-center md:justify-start`}/>
        </div>
        <div className="relative">
          <div className="absolute top-9 right-0 z-10">
            <img src={manWearGlass} alt="" className="-z-10" />
          </div>
          <div className="top-10 right-0 z-50">
            <img src={starBall} alt="" className="z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
