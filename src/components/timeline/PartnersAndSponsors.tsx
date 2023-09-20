import React from "react";
import { SponsorsGallery } from "./SponsorsGallery";

export const PartnersAndSponsors: React.FC = () => {
  return (
    <div className="px-5 mt-5 mb-16 md:px-20">
      <div className="text-center">
        <h2 className="class-display font-bold text-lg my-3 md:text-2xl">Partners and Sponsors</h2>
        <p className="text-sm montserrat my-6 pb-5">
          Getlinked Hackathon 1.0 is honored to have the following major <br className="hidden md:block"/>
          companies as its partners and sponsors
        </p>
      </div>
      <div className="border rounded p-3 border-[#D434FE]">
        <SponsorsGallery />
      </div>
    </div>
  );
};
