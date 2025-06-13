import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface IntersectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const IntersectionWrapper: React.FC<IntersectionWrapperProps> = ({ children, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default IntersectionWrapper;