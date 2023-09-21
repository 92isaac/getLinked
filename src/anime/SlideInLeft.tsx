// SlideUp.tsx
import React, { useRef, useEffect } from 'react';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideInLeft: React.FC<SlideUpProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
          } else {
            entry.target.classList.remove('animate-slide-in-left'); // Remove animation when not in view
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

export default SlideInLeft;
