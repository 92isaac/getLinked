import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
// import { star } from '../assets/images';

interface BlinkingStarProps {
  colour: string;
  className:string;
}

const BlinkingStar: React.FC<BlinkingStarProps> = ({ colour, className }) => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === 'white' ? colour : 'white');
    }, 1000);

    return () => clearInterval(interval);
  }, [colour]);

  return (
    <div className="text-4xl" style={{ color }}>
      <FaStar  className={`w-4 ${className}`} />
      {/* <img src={star} alt="star" className="w-4 "/> */}
    </div>
  );
};

export default BlinkingStar;
