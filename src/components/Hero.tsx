import React from 'react';
import RegisterButton from './RegisterButton';

interface HeroProps {
  imageUrl: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-6 animate-appear">
        <RegisterButton onClick={() => alert('Registration form will open here')} />
      </div>
      <div className="w-full max-w-4xl my-8 overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full object-cover transform transition-transform duration-700 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
      <div className="mt-6 animate-appear">
        <RegisterButton onClick={() => alert('Registration form will open here')} />
      </div>
    </div>
  );
};

export default Hero;