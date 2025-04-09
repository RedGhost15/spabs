import React, { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ShinyText from './shinyText/ShinyText'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Prevent scrollbar-caused layout shift
    document.documentElement.style.overflowY = 'scroll';
    document.documentElement.style.scrollbarGutter = 'stable';
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.overflowY = '';
      document.documentElement.style.scrollbarGutter = '';
    };
  }, []);

  const menuItems = [
    { name: 'Detailing', path: '/detailing' },
    { name: 'Tuning', path: '/tuning' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  };

  const activeLinkStyle = {
    ...gradientTextStyle,
    borderBottom: '2px solid #A7CFDF'
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} px-[calc(100vw-100%)]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
            <ShinyText text="PAB CUSTOM" disabled={false} speed={3} className='shinyText'  />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="transition-colors duration-200 hover:opacity-80 text-xl"
                style={location.pathname === item.path ? activeLinkStyle : gradientTextStyle}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              style={gradientTextStyle}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isScrolled ? 'bg-black' : 'bg-black/90'}`}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === item.path 
                    ? 'bg-white/20' 
                    : 'hover:bg-white/10'
                }`}
                style={gradientTextStyle}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;