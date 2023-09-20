import React from "react";
import BlinkingStar from "../../utils/BlinkingStar";
import { StraightLine } from "../../utils/StraightLine";
import { Millestone } from "../../utils/Millestone";

export const EventTimeline: React.FC = () => {
  return (
    <div className="px-5 mt-5 mb-16 md:px-20">
      <div className="text-center">
        <h2>Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <div className="flex justify-center items-center">
          <BlinkingStar colour="yellow" />
        </div>
      </div>

      <div className="relative grid md:grid-cols-2 md:pt-20 gap-x-32 pl-6 md:px-20 text-sm">
        <div className="absolute md:left-1/2 top-6">
          <StraightLine className="h-[800px] md:h-[500px]" />
          <Millestone
            className="absolute md:top-[22%] -left-4 text-sm text-center leading-7"
            smallCircle="w-6 h-6"
            bigCircle="w-8 h-8"
            content="1"
          />
          <Millestone
            className="absolute md:top-[38%] -left-4 text-sm text-center leading-7"
            smallCircle="w-6 h-6"
            bigCircle="w-8 h-8"
            content="2"
          />
          <Millestone
            className="absolute md:top-[50%] -left-4 text-sm text-center leading-7"
            smallCircle="w-6 h-6"
            bigCircle="w-8 h-8"
            content="3"
          />
          <Millestone
            className="absolute md:top-[66%] -left-4 text-sm text-center leading-7"
            smallCircle="w-6 h-6"
            bigCircle="w-8 h-8"
            content="4"
          />
          <Millestone
            className="absolute md:top-[82%] -left-4 text-sm text-center leading-7"
            smallCircle="w-6 h-6"
            bigCircle="w-8 h-8"
            content="5"
          />
          <Millestone
            className="absolute md:top-[98%] -left-4 text-sm text-center leading-7"
            smallCircle="w-6 h-6"
            bigCircle="w-8 h-8"
            content="6"
          />
        </div>
        <div className=" flex flex-col justify-end">
          <div className="mt-5 md:text-right">
            <h3 className="font-bold text-[#D434FE]">Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 ">
            <p className="font-bold text-[#D434FE]">November 18, 2023</p>
          </div>
        </div>
        <div className="relative hidden md:flex flex-col justify-end">
          <div className="mt-5 md:text-right">
            <p className="font-bold text-[#D434FE]">November 18, 2023</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 ">
            <h3 className="font-bold text-[#D434FE]">
              Teams Registration begins
            </h3>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
            <p className="block md:hidden font-bold text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 md:text-right">
            <h3 className="font-bold text-[#D434FE]">
              Teams Registration ends
            </h3>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 ">
            <p className="font-bold text-[#D434FE]">November 18, 2023</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 md:text-right">
            <p className="hidden md:block font-bold text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-end">
          <div className="mt-5 ">
            <h3 className="font-bold text-[#D434FE]">
              Announcement of the accepted teams and ideas
            </h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <p className="block md:hidden font-bold text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 md:text-right">
            <h3 className="font-bold text-[#D434FE]">
              Getlinked Hackathon 1.0 Offically Begins
            </h3>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 ">
            <p className="font-bold text-[#D434FE]">November 18, 2023</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 md:text-right">
            <p className="hidden md:block font-bold text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-end">
          <div className="mt-5 ">
            <h3 className="font-bold text-[#D434FE]">Demo Day</h3>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>

            <p className="block md:hidden font-bold text-[#D434FE]">
              November 18, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
