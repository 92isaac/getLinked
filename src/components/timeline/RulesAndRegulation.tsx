import React from "react";
import { rulesregulation } from "../../assets/images";
import { PurpleBg } from '../../utils/PurpleBg'


export const RulesAndRegulation: React.FC = () => {
  return (
    <div className="relative border-t-[0.1px] border-[#2e2053] z-30">
      <PurpleBg className="w-2/3 -top-48 z-10 absolute"/>
      <div className="flex flex-col-reverse md:flex md:flex-row justify-between items-center px-5 md:px-20 py-10">
        <div className="relative flex-1 text-center md:text-left z-30 ">
          <div className="relative">
            <h3 className="class-display font-bold text-lg md:text-2xl">
              Rules and
              <span className="block text-[#D434FE]">Guidelines</span>
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
        </div>
        <div className="flex-1">
      <PurpleBg className="w-1/2 top-28 right-10 z-10 absolute"/>
          <img src={rulesregulation} alt="rules !" />

        </div>
      </div>
    </div>
  );
};
