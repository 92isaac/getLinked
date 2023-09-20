import React from "react";
import BlinkingStar from "../../utils/BlinkingStar";

export const EventTimeline: React.FC = () => {
  return (
    <div>
      <div className="text-center">
        <h2>Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <BlinkingStar colour="yellow" />
      </div>
    </div>
  );
};
