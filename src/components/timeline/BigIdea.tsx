import React, {  } from "react";
import { bigIdea } from "../../assets/images";
import SlideUp from "../../anime/SlidesUp";
import SlideInLeft from "../../anime/SlideInLeft";

export const BigIdea: React.FC = () => {

  return (
    <div className=" border-t-[0.1px] border-[#2e2053]">
      <div className="md:flex justify-between items-center px-5 md:px-20 py-10">
        <SlideInLeft>
        <div className="flex-1">
          <img src={bigIdea} alt="big idea!" />
        </div>
        </SlideInLeft>
        <div className="relative flex-1 text-center md:text-left ">
            <SlideUp>
          <div className="relative">
            <h3 className="class-display font-bold text-lg md:text-2xl">
              Introduction to getlinked{" "}
              <span className="block text-[#D434FE]">tech Hackathon 1.0</span>
            </h3>

          </div>
          <p className="leading-7 md:leading-8 text-sm">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
            </SlideUp>
        </div>
      </div>
    </div>
  );
};
