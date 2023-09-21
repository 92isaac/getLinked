// src/components/Typewriter.tsx
import React, { Fragment } from 'react';
import TypeIt from "typeit-react";


interface TypewriterProps {
  children: React.ReactNode;
}



const Typewriter: React.FC<TypewriterProps> = ({ children }) => {
  return <TypeIt element={Fragment}>{children}</TypeIt>;
};

export default Typewriter;
