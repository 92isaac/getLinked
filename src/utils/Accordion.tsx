import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border-b-[1px] border-[#D434FE] py-3 my-3 montserrat text-left">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-xs md:text-sm montserrat">{title}</h2>
        {isExpanded ? <AiOutlineMinus className="text-sm font-bold text-[#D434FE]" /> : <AiOutlinePlus className="text-sm font-bold text-[#D434FE]" />}
      </div>
      {isExpanded && <div className="mt-2 text-sm leading-6 montserrat text-justify">{children}</div>}
    </div>
  );
};

export default Accordion;
