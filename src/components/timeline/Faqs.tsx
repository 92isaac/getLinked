import React from "react";
import { casualworker } from "../../assets/images";
import Accordion from "../../utils/Accordion";
import SlideInLeft from "../../anime/SlideInLeft";
import SlideUp from "../../anime/SlidesUp";

export const Faqs: React.FC = () => {
  return (
    <div className=" border-t-[0.1px] border-[#2e2053]" id="#">
      <div className="flex flex-col md:flex md:flex-row justify-between items-center px-8 md:px-20 py-10">
        <div className="relative flex-1 text-center md:text-left z-30">
          <SlideUp>
          <div className="relative">
            <h3 className="class-display font-bold text-lg md:text-2xl">
              Frequently Ask
              <span className="block text-[#D434FE]">Question</span>
            </h3>
            <p className="text-sm montserrat">
              We got answers to the questions that you might <br className="hidden md:block" /> want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>
          </div>

          {faqQuestions.map((faq) => (
            <Accordion key={faq.id} title={faq.title}>
              {faq.children}
            </Accordion>
          ))}
          </SlideUp>
        </div>
        <div className="flex-1 ">
          <SlideInLeft>
          <img src={casualworker} alt="rules !" className="relative z-30"/>
          </SlideInLeft>
        </div>
      </div>
    </div>
  );
};

const faqQuestions = [
  {
    id: 0,
    title: "Can I work on a project I started before the hackathon?",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates animi atque natus ea distinctio in hic iure perferendis maiores velit fugiat rerum laboriosam quia, neque magnam voluptate nostrum! Ducimus repellendus alias minima, sequi iure nostrum non quisquam. Iste, ut.",
  },
  {
    id: 1,
    title: "What happens if I need help during the hackathon?",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates animi atque natus ea distinctio in hic iure perferendis maiores velit fugiat rerum laboriosam quia, neque magnam voluptate nostrum! Ducimus repellendus alias minima, sequi iure nostrum non quisquam. Iste, ut.",
  },
  {
    id: 2,
    title: "What happens if I don't have an idea for a project?",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates animi atque natus ea distinctio in hic iure perferendis maiores velit fugiat rerum laboriosam quia, neque magnam voluptate nostrum! Ducimus repellendus alias minima, sequi iure nostrum non quisquam. Iste, ut.",
  },
  {
    id: 3,
    title: "Can I join a team or do I have to come with one?",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates animi atque natus ea distinctio in hic iure perferendis maiores velit fugiat rerum laboriosam quia, neque magnam voluptate nostrum! Ducimus repellendus alias minima, sequi iure nostrum non quisquam. Iste, ut.",
  },
  {
    id: 4,
    title: "What happens after the hackathon ends",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates animi atque natus ea distinctio in hic iure perferendis maiores velit fugiat rerum laboriosam quia, neque magnam voluptate nostrum! Ducimus repellendus alias minima, sequi iure nostrum non quisquam. Iste, ut.",
  },
  {
    id: 5,
    title: "Can I work on a project I started before the hackathon?",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates animi atque natus ea distinctio in hic iure perferendis maiores velit fugiat rerum laboriosam quia, neque magnam voluptate nostrum! Ducimus repellendus alias minima, sequi iure nostrum non quisquam. Iste, ut.",
  },
];
