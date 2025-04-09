import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


const ExteriorDetailingSection = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row1Ref, row1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row2Ref, row2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [carouselRef, carouselInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const addOnServices = React.useMemo(() => ([
    {
      title: "Spălare Profesională",
      price: "250 - 300 RON",
      details: [
          "Curățare de întreținere exterior",
          "Spălare cu spumă activă",
          "Decontaminare roți și caroserie",
          "Uscare prin suflare",
          "Durata: 2 ore"
      ]
  },
  {
      title: "Polish per Element",
      price: "100-150 RON",
      details: [
          "100 Lei pentru element mic",
          "150 Lei pentru element mare"
      ]
  },
  {
      title: "Sealant Lichid",
      price: "100 RON",
      details: [
          "Protecție sintetică hidrofobă",
          "Proprietăți auto-curățare",
          "Durata: 0.5 ore"
      ]
  },
  {
      title: "Sealant Ceramic Spray",
      price: "200 - 300 RON",
      details: [
          "Protecție spray pe bază de SiO₂",
          "Durabilitate 3-6 luni",
          "Durata: 1 oră"
      ]
  },
  {
      title: "Protecție Ceramică Ewocar",
      price: "700 - 1.000 RON",
      details: [
          "Protecție 5 ani + Boost 12 luni",
          "Strat nanoscopic și hidrofob",
          "Durata: 24 ore"
      ]
  },
  {
      title: "Protecție Gtechniq Crystal",
      price: "600 - 900 RON",
      details: [
          "Protecție 3-5 ani",
          "Luciu intens și rezistență la contaminanți",
          "Durata: 24 ore"
      ]
  },
  {
      title: "Coating Ceramic Gtechniq",
      price: "500 - 800 RON",
      details: [
          "Coating hidrofob 1-2 ani",
          "Poate fi aplicat peste alte protecții",
          "Durata: 24 ore"
      ]
  },
  {
      title: "Duble Straturi Coating",
      price: "1.000 - 1.500 RON",
      details: [
          "Protecție ceramică rezistentă",
          "Aplicată pe jante și etrieri",
          "Durata: 24 ore"
      ]
  },
  {
      title: "Tratament Geamuri Laterale",
      price: "150 - 250 RON",
      details: [
          "Îmbunătățire vizibilitate și siguranță",
          "Durata: 2 ore"
      ]
  },
  {
      title: "Tratament Parbriz",
      price: "150 - 200 RON",
      details: [
          "Protecție hidrofobă 12 luni",
          "Durata: 2 ore"
      ]
  },
  {
      title: "Tratament Soft-top",
      price: "250 - 300 RON",
      details: [
          "Protecție plafon textil",
          "Durata: 1.5 ore + uscare"
      ]
  }
  ]), []);
  

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  };

  return (
    <div className="bg-gray-900">
      {/* Mini-Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero/hero3.jpg)",
            filter: 'brightness(0.5) blur(2px)',
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 h-28"
            style={gradientTextStyle}
          >
            Exterior Detailing
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Fă-ți mașina să strălucească ca nouă!
          </motion.p>
        </div>
      </motion.section>

      {/* Service Tier Section */}
      <section className="py-20">
        {/* Row 1 - Complex Exterior Cleaning */}
        <motion.div
          ref={row1Ref}
          initial={{ opacity: 0, x: -50 }}
          animate={row1InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <img
                src="/exterior/ext5.jpg"
                loading="lazy"
                alt="Exterior detailing process"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-4 text-white" style={gradientTextStyle}>Polish Integral 2 Pasi cu Detailing Exterior Complet</h2>
              <p className="text-white font-extrabold text-xl mb-4 underline" style={gradientTextStyle}>1.200 - 1.700 RON</p>
              <p className="text-gray-300 leading-relaxed">
              Îți oferim cel mai bun tratament pentru mașina ta printr-un detailing exterior complet, care durează 24 de ore și include spălarea caroseriei cu spumă activă și șampon auto adaptat, curățarea detaliată a motorului, decontaminarea chimică și mecanică, corectarea suprafețelor vopsite și lăcuite prin polish în 2-3 pași, precum și uscarea prin suflare cu aer.
              </p>
              <p className="text-gray-100 leading-relaxed underline">
              Durata totală: 24 ore.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Row 2 - Quick Exterior Wash */}
        <motion.div
          ref={row2Ref}
          initial={{ opacity: 0, x: 50 }}
          animate={row2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-4 text-white" style={gradientTextStyle}>Polish Integral One-Step cu Detailing Exterior Complet</h2>
              <p className="text-white font-extrabold text-xl mb-4 underline" style={gradientTextStyle}>800 - 1.300 RON</p>
              <p className="text-gray-300 leading-relaxed">
              Polish-ul One-Step este ideal pentru mașinile noi sau recent revopsite, oferind un proces complet de decontaminare și corecție a lacului în doar 8 ore, incluzând decontaminarea chimică a jantelor și anvelopelor, curățarea ornamentelor, siglelor și grilelor, și aplicarea unui polish One-Step cu protecție încorporată.              </p>
              <p className="text-gray-100 leading-relaxed underline">
              Durata totală: 24 ore.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden group order-1 md:order-2">
              <img
                src="/exterior/ext4.jpg"
                loading="lazy"
                alt="Quick exterior wash"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Add-on Services Carousel */}
      <motion.section
        ref={carouselRef}
        initial={{ opacity: 0, y: 20 }}
        animate={carouselInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            style={gradientTextStyle}
          >
            Servicii Extra
          </motion.h2>
          
          {/* Navigation buttons container */}
          <div className="hidden lg:block">
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500/30 cursor-pointer transition-colors">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500/30 cursor-pointer transition-colors">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
              disabledClass: 'opacity-30 cursor-default pointer-events-none'
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                navigation: false
              },
              1024: {
                slidesPerView: 3,
                navigation: {
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }
              }
            }}
            className="pb-12"
          >
            {addOnServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 h-full"
                  style={{
                    minHeight: '300px', 
                    maxHeight: '300px', 
                    width: '100%',
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-blue-400 text-2xl font-bold mb-4">{service.price}</p>
                  <p className="text-gray-300">{service.details}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>


      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 20 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-900/90 backdrop-blur-sm relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/cta/cta6.jpg)",
            opacity: 0.2
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-1 h-24"
            style={gradientTextStyle}
          >
            Întoarce priviri cu o mașină strălucitoare
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Programează astăzi detalierea exteriorului cu noi!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
          <Link
            to="/contact"
            className="relative inline-block bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#23538A]/50 group overflow-hidden"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="relative z-10">Contactează-ne!</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#23538A] to-[#A7CFDF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ExteriorDetailingSection;