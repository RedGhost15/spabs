import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-900 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/cta/cta1.jpg')"
        }}
      ></div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
        Fă o programare astăzi!
        </h2>
        <p className="text-xl text-gray-300 mb-8">
        Servicii de detailing & tuning de top este la un click distanță
        </p>
        <Link
            to="/contact"
            className="relative inline-block bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#23538A]/50 group overflow-hidden"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="relative z-10">Contactează-ne!</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#23538A] to-[#A7CFDF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
      </motion.div>
    </section>
  );
};

export default CTA;