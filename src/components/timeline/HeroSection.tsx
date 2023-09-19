import React from "react";
import { manWearGlass, starBall, title, underLine } from "../../assets/images";
import { Button } from "../../utils/Button";
import { Countdowm } from "./Countdowm";

export const HeroSection: React.FC = () => {
  return (
    <section className="border-b-[1px]">
      <div className="flex justify-end text-white">
        <div>
          <h3 className="font-bold italic">
            Igniting a Revolution in HR Innovation
          </h3>
          <img
            src={underLine}
            alt="hero underline"
            className="w-1/2 float-right"
          />
        </div>
      </div>
      <div className="flex justify-between montserrat">
        <div className="pt-10">
          <img src={title} alt="" className="w-" />
          <p>
            Participate in getlinked tech Hackathon 2023 stand,
            <br />a chance to win a Big prize
          </p>
          <Button title="Register" className="mt-4" OnClick />
          <Countdowm className="mt-16"/>
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
