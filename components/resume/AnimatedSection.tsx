import type { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const AnimatedSection = ({ children, className = '', delay = 0, id }: AnimatedSectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-800 ease-out ${
        isIntersecting
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;