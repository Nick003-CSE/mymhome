import React from 'react';

interface RegisterButtonProps {
  url?: string;
  className?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ 
  url = 'https://shimmering-dodol-6336ee.netlify.app/', // ✅ Replace with your target URL
  className = '' 
}) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative overflow-hidden px-8 py-3 
        bg-primary-600 text-white font-medium rounded-lg
        transition-all duration-300 transform
        hover:shadow-lg hover:scale-105
        active:scale-95 active:shadow-inner
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
        ${className}
      `}
    >
      <span className="relative z-10">Register Now</span>
      <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
    </button>
  );
};

export default RegisterButton;
