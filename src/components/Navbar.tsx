import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from './Logo';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) => `
    px-4 py-2 rounded-lg transition-colors duration-300
    ${isActive 
      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100' 
      : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400'
    }
  `;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* <div className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-semibold text-neutral-900 dark:text-white">Stellar</span>
        </div> */}
        <div className="flex gap-4">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;