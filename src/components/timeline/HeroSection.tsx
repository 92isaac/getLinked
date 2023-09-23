import React from "react";
import { manWearGlass, starBall, title, underLine } from "../../assets/images";
import { Button } from "../../utils/Button";
import { PurpleBg } from "../../utils/PurpleBg";
import { Countdowm } from "./Countdowm";
import Typewriter from "../../anime/Typewriter";
import SlideInLeft from "../../anime/SlideInLeft";
import { useNavigate } from "react-router-dom";
import BlinkingStar from "../../utils/BlinkingStar";

export const HeroSection: React.FC = () => {
  const targetDate = new Date("2023-09-26");
  const navigate = useNavigate();

  return (
    <section className="relative md:pl-20">
      <PurpleBg className="w-1/2 -top-48 z-10 absolute" />
      <div className="flex md:justify-end justify-center text-white">
        <div className="md:pr-10">
          <Typewriter>
            <h3 className="md:text-2xl font-bold italic">
              Igniting a Revolution in HR Innovation
            </h3>
          </Typewriter>
          <img
            src={underLine}
            alt="hero underline"
            className="w-1/2 float-right"
          />
        </div>
      </div>
      <div className="md:flex justify-between montserrat">
        <div className="text-center md:text-left  pt-10 px-5 md:px-0">
          <SlideInLeft>
            <img src={title} alt="" className="mx-auto" />
            <p className="text-xs">
              Participate in getlinked tech Hackathon 2023 stand
              <br className="hidden md:block" /> a chance to win a Big prize
            </p>
          </SlideInLeft>
          <Button
            title="Register"
            className="mt-4 pt-2"
            OnClick={() => {
              navigate("/register");
            }}
          />
          <Countdowm
            className={`mt-5 md:mt-16 justify-center md:justify-start`}
            targetDate={targetDate}
          />
        </div>
        <div className="relative">
          <PurpleBg className="w-full -top-32 z-10 absolute" />
          <div className="absolute right-0 z-10">
            <img src={starBall} alt="" className="z-10" />
          </div>
          <div className="top-10 right-0 z-50">
            <img src={manWearGlass} alt="" className="z-10" />
          </div>
        </div>
      </div>
      <BlinkingStar colour="purple" className="absolute -bottom-60"/>
      <BlinkingStar colour="#3f3e3e" className="absolute bottom-40 right-[60%]"/>
      <BlinkingStar colour="gold" className="absolute top-20 right-[45%]"/>
      <BlinkingStar colour="gray" className="absolute top-0"/>
    </section>
  );
};
