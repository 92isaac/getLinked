// src/components/Typewriter.tsx
import React from 'react';
import TypeIt from "typeit-react";


interface TypewriterProps {
  children: React.ReactNode;
}



const Typewriter: React.FC<TypewriterProps> = ({ children }) => {
  return <TypeIt element={"span"}>{children}</TypeIt>;
};

export default Typewriter;
