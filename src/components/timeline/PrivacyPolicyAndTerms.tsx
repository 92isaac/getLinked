import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../../utils/Button";
import { Vector, manonpadlock } from "../../assets/images";

export const PrivacyPolicyAndTerms: React.FC = () => {
  return (
    <div className="border-t-[0.1px] border-[#2e2053]">
      <div className="md:px-20 px-5 md:flex justify-between py-16 items-center relative">
        <div className="flex-1 text-xs md:text-sm text-center md:text-left">
          <h2 className="class-display font-bold text-lg my-3 md:text-2xl">
            Privacy, Policy and <br className="" />
            <span className="text-[#D434FE]">Terms</span>
          </h2>
          <p className="md:text-sm montserrat">
            Last updated on September 12, 2023
          </p>
          <p className="py-6 md:text-sm montserrat">
            Below are our privacy & policy, which outline a lot of goodies.{" "}
            <br className="hidden md:block" />
            it’s our aim to always take of our participant
          </p>

          <div className="border border-[#D434FE] rounded-md px-5 md:px-16 pt-16 mb-10 montserrat">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="py-8">
              <h3 className="text-[#D434FE] font-bold">Licensing Policy</h3>
              <p className="font-bold">
                Here are terms of our Standard License:
              </p>
              <ul className="md:text-sm">
                <li className="flex py-2">
                  <IoIosCheckmarkCircleOutline className="bg-[#2DE100] rounded-full" />{" "}
                  <span className="pl-5 flex-1 md:leading-7">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </span>
                </li>
                <li className="flex py-2">
                  <IoIosCheckmarkCircleOutline className="bg-[#2DE100] rounded-full" />{" "}
                  <span className="pl-5 flex-1 md:leading-7">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </span>
                </li>
              </ul>
              <div className="flex justify-center items-center">
                <Button title="Read More" className="mt-7 pt-2" OnClick={()=>{}} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-20 md:mt-0 relative">
          <img
            src={manonpadlock}
            alt=""
            className="md:w-[70%] mx-auto z-40 relative"
          />
        </div>
        <img
          src={Vector}
          alt=""
          className="absolute bottom-56 right-10 md:top-20 md:right-40 z-10 w-[60%] md:w-[25%]"
        />
      </div>
    </div>
  );
};
