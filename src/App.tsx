import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-neutral-900' : 'bg-neutral-50'}`}>
        <Navbar />
        <button 
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors duration-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;