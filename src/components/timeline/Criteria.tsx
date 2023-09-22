import React from "react";
import { criteria } from "../../assets/images";
import { Button } from "../../utils/Button";
import SlideInLeft from "../../anime/SlideInLeft";
import SlideUp from "../../anime/SlidesUp";
import { PurpleBg } from "../../utils/PurpleBg";

export const Criteria: React.FC = () => {
  return (
    <div className=" border-t-[0.1px] border-[#2e2053] relative">
      <div className="flex flex-col md:flex md:flex-row justify-between items-center px-5 md:px-20 py-10">
        <div className="flex-1 relative z-30">
          <PurpleBg className="absolute top-20 z-10"/>
          <PurpleBg className="absolute top-0 bottom-32 z-10"/>

          <SlideInLeft>
          <img src={criteria} alt="criteria!" className="relative z-30"/>
          </SlideInLeft>
        </div>
        <div className="relative flex-1 text-center md:text-left z-40">
          <SlideUp>
          <div className="relative">
            <h3 className="class-display font-bold text-lg md:text-2xl">
              Judging Criteria
              <span className="block text-[#D434FE]">Key attributes</span>
            </h3>
          </div>
          <ul className="relative z-30">
          <PurpleBg className="absolute top-[100%] left-[100%] z-10"/>
            {attributes.map((attr) => (
              <li
                className="pb-5 leading-5 text-xs montserrat"
                key={attr.id}
              >
                {" "}
                <span className="text-[#FF26B9] font-bold">{attr.point}: </span>
                {attr.desc}
              </li>
            ))}
          </ul>
          </SlideUp>
          <Button title="Read more" className="mt-4 pt-2" OnClick={()=>{}} />
        </div>
      </div>
          <PurpleBg className="absolute top-40 left-0 z-10"/>
          <PurpleBg className="absolute top-0 bottom-32 z-10"/>
    </div>
  );
};

const attributes = [
  {
    id: "1",
    point: "Innovation and Creativity",
    desc: " Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    id: "2",
    point: "Functionality",
    desc: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    id: "3",
    point: "Impact and Relevance",
    desc: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    id: "4",
    point: "Technical Complexity",
    desc: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    id: "5",
    point: "Adherence to Hackathon Rules",
    desc: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];
