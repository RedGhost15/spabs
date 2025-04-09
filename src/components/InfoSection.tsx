import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InfoSection = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  };

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      {/* Row 1 */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: -50 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden group">
            <img
              src="/exterior/ext1.jpg"
              loading="lazy"
              alt="Car detailing process"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">ÎNGRIJIRE AUTO DE PRECIZIE</h3>
            <h2 
              className="text-4xl font-bold mb-6 leading-tight"
              style={gradientTextStyle}
            >
              Transformăm mașini în fiecare zi
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Echipa noastră de experți îmbină pasiunea cu precizia pentru a oferi servicii de detailing excepționale.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Folosind echipamente de ultimă generație și tehnici avansate, redăm și îmbunătățim aspectul mașinii tale până la nivelul de showroom.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, x: 50 }}
        animate={inView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            <div className="mb-8">
              <h3 className="text-blue-400 text-lg font-semibold mb-3 tracking-wider">PRODUSE PREMIUM</h3>
              <p className="text-gray-300 leading-relaxed">
                Folosim exclusiv produse de detailing de calitate superioară pentru rezultate optime. 
                Gama noastră atent selecționată oferă protecție superioară și strălucire de durată.
              </p>
            </div>
            <div>
              <h3 className="text-blue-400 text-lg font-semibold mb-3 tracking-wider">TECHNICIENI EXPERȚI</h3>
              <p className="text-gray-300 leading-relaxed">
                Tehnicienii noștri certificați aduc ani de experiență și expertiză în fiecare proiect.
                Prin formare continuă în cele mai noi tehnici, oferim rezultate constante și profesionale.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden group order-1 md:order-2">
            <img
              src="/staff/staff2.jpg"
              loading="lazy"
              alt="Detailing tools and products"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InfoSection;
