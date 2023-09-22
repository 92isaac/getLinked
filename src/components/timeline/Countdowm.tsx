import React,  { useState, useEffect } from 'react'

interface CountdownProps {
    className: string
    // targetDate: Date;

}

export const Countdowm:React.FC<CountdownProps> = ({className}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  function calculateTimeLeft() {
    const targetDate = new Date('2023-09-26');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className={`flex ${className} items-center`}>
        <div className="flex montserrat justify-between items-center gap-4 text-4xl">
            <h1 className='unica'>{timeLeft.days}<small className='text-[10px]'>D</small></h1>
            <h1 className='unica'>{timeLeft.hours}<small className='text-[10px]'>H</small></h1>
            <h1 className='unica'>{timeLeft.minutes}<small className='text-[10px]'>M</small></h1>
            <h1 className='unica'>{timeLeft.seconds}<small className='text-[10px]'>S</small></h1>
        </div>
    </div>
  )
}

