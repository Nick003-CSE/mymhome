import React from 'react';
import { Rocket } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 48, className = '' }) => {
  return (
    <div className={`logo-container ${className}`}>
      <Rocket 
        size={size} 
        className="text-primary-600 transition-all duration-500 hover:rotate-12 hover:scale-110" 
        strokeWidth={1.5} 
      />
    </div>
  );
};

export default Logo;