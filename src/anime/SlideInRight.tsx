// SlideUp.tsx
import React, { useRef, useEffect } from 'react';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideInRight: React.FC<SlideUpProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          } else {
            entry.target.classList.remove('animate-slide-in-right'); // Remove animation when not in view
          }
        });
      },
      { threshold: 0 } // Trigger when completely in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // Run only on mount and unmount

  return <div ref={elementRef}>{children}</div>;
};

export default SlideInRight;
