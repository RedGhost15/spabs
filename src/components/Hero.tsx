import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  };
  
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero/hero1.jpg)"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-2 h-28"
          style={gradientTextStyle}
        >
          Premium Car Detailing
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl mb-8"
          style={gradientTextStyle}
        >
          Masina ta merita tot ce-i mai bun!
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}>
          <Link
          to="/contact"
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200'>
          Contacteaza-ne!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;