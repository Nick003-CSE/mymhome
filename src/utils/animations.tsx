import React from 'react';

// HOC to add fade-in animation to any component
export const withFadeIn = <P extends object>(
  Component: React.ComponentType<P>,
  delay: number = 0
) => {
  return (props: P) => (
    <div
      className="opacity-0 animate-fadeIn"
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: 'forwards' 
      }}
    >
      <Component {...props} />
    </div>
  );
};

// Custom animation hook for scroll-triggered animations
export const useScrollAnimation = (threshold: number = 0.1) => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, visible };
};

// Animated container that reveals children when scrolled into view
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};