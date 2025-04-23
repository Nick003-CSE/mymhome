import React from 'react';

interface HeaderProps {
  companyName: string;
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ companyName, logoUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="w-32 h-32">
        <img 
          src={logoUrl} 
          alt={`${companyName} logo`} 
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 tracking-tight leading-tight">
        {companyName}
      </h1>
    </div>
  );
};

export default Header;