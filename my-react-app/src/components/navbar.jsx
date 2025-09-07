// import React from "react";

// import {Link} from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navcontainer">
//         <div className="logo">My URL Shortner</div>
//         <div className="menu">
//         <Link to="/">Home</Link>
//         <Link to="/About">About</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState, useEffect } from "react";
import { LinkIcon, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${ 
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/80 backdrop-blur-lg' 
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-violet-600 to-blue-600 p-2.5 rounded-xl">
                <LinkIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              LinkShrink
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('/')} 
              className={`relative transition-colors font-medium group ${
                isActive('/') ? 'text-violet-600' : 'text-gray-700 hover:text-violet-600'
              }`}
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
            <button 
              onClick={() => handleNavClick('/about')} 
              className={`relative transition-colors font-medium group ${
                isActive('/about') ? 'text-violet-600' : 'text-gray-700 hover:text-violet-600'
              }`}
            >
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-200">
            <button 
              onClick={() => handleNavClick('/')} 
              className={`block w-full text-left font-medium px-2 py-1 transition-colors ${
                isActive('/') ? 'text-violet-600' : 'text-gray-700 hover:text-violet-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('/about')} 
              className={`block w-full text-left font-medium px-2 py-1 transition-colors ${
                isActive('/about') ? 'text-violet-600' : 'text-gray-700 hover:text-violet-600'
              }`}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;