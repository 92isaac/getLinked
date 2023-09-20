import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface BlinkingStarProps {
  colour: string;
}

const BlinkingStar: React.FC<BlinkingStarProps> = ({ colour }) => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prevColor => prevColor === 'white' ? colour : 'white');
    }, 1000);

    return () => clearInterval(interval);
  }, [colour]);

  return (
    <div className="text-4xl" style={{ color }}>
      <FaStar  className="w-3" />
    </div>
  );
};

export default BlinkingStar;
