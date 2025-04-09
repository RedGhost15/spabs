import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import ScrollBanner from './ScrollBanner';



const InteriorDetailingSection = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row1Ref, row1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row2Ref, row2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [carouselRef, carouselInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const addOnServices = React.useMemo(() => ([
    {
      title: "Protecție Leather Guard",
      price: "300 - 400 RON",
      details: [
          "Aplicarea a două straturi de Leather Guard cu durabilitate între 3 și 12 luni, necesită Detailing Interior Complet și durează aproximativ 2 ore."
      ]
  },
  {
      title: "Protecție Ceramică Piele",
      price: "400 - 700 RON",
      details: [
          "Protecție ceramică semi-permanentă pentru piele, cu proprietăți hidrofobe și anti-UV, necesită Detailing Interior Complet și are o durată de 4 ore."
      ]
  },
  {
      title: "Tratament Hidrofob Stofă",
      price: "300 - 400 RON",
      details: [
          "Impermeabilizare pentru materiale textile care previne pătarea, necesită Detailing Interior Complet și durează 3 ore plus timp de uscare."
      ]
  },
  {
      title: "Tratament Mixt",
      price: "300 - 700 RON",
      details: [
          "Tratament personalizat cu proprietăți hidrofobe pentru fiecare tip de suprafață, necesită Detailing Interior Complet și durează 3 ore plus uscare."
      ]
  },
  {
      title: "Tratament Covorașe",
      price: "100 RON",
      details: [
          "Impermeabilizare pentru covorașe textile, necesită Detailing Interior și durează aproximativ 1 oră plus timp de uscare."
      ]
  },
  {
      title: "Protecție Plastice",
      price: "300 - 500 RON",
      details: [
          "Protecție pentru suprafețele din plastic împotriva razelor UV și a murdăriei, necesită cel puțin un Quick Detail Interior și durează 2 ore."
      ]
  },
  {
      title: "Ozonificare",
      price: "100 RON",
      details: [
          "Elimină mirosurile neplăcute și distruge bacteriile și virusurile din interiorul mașinii."
      ]
  },
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
            backgroundImage: "url(/detailing-img/int4.jpg)",
            filter: 'brightness(0.5) blur(2px)',
            
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 h-24"
            style={gradientTextStyle}
          >
            Detailing Interior
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Curățenie profundă pentru sufletul mașinii tale
          </motion.p>
        </div>
      </motion.section>


      <ScrollBanner />

      {/* Service Tier Section */}
      <section className="py-20">
        {/* Row 1 - Complex Interior Cleaning */}
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
                src="/detailing-img/int3.png"
                loading="lazy"
                alt="Interior cleaning process"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-4 text-white" style={gradientTextStyle}>Curățare Interioară Completă</h2>
              <p className="text-white font-extrabold text-xl mb-4 underline" style={gradientTextStyle}>700 - 1.400 RON</p>
              <p className="text-gray-300 leading-relaxed">
              Suflare cu aer și aspirare praf din toate compartimentele, curățare în profunzime a scaunelor, mochetei, covorașelor și portbagajului cu injecție-extracție, degresare a elementelor din piele, textil, plastic și plafon, curățare completă a geamurilor interior/exterior, display-urilor și ornamentelor, curățare a zonelor interioare ale pragurilor ușilor și portbagajului, hidratare a elementelor din piele, tratament de revitalizare a pieselor din plastic, ozonificare interior și igienizare habitaclu, plus spălare exterior cu spumă activă, șampon pH neutru și uscare
              </p>
              <p className="text-gray-100 leading-relaxed underline">
              Durata totală: 24 ore (include uscarea completă a tapițeriilor).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Row 2 - Quick Clean */}
        <motion.div
          ref={row2Ref}
          initial={{ opacity: 0, x: 50 }}
          animate={row2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-4 text-white" style={gradientTextStyle}>Curățare Interioară Rapidă</h2>
              <p className="text-white font-extrabold text-xl mb-4 underline" style={gradientTextStyle}>700 - 1.400 RON</p>
              <p className="text-gray-300 leading-relaxed">
              Suflare cu aer și aspirare praf din toate compartimentele, curățare a scaunelor, covorașelor și portbagajului, curățare a elementelor din piele, textil și plastic, precum și curățare completă a geamurilor interior/exterior, display-urilor și ornamentelor              </p>
              <p className="text-gray-100 leading-relaxed underline">
              Durata totală: 1 - 2 ore.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden group order-1 md:order-2">
              <img
                src="/detailing-img/int1.jpg"
                loading="lazy"
                alt="Quick interior cleaning"
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
            backgroundImage: "url(/cta/cta4.jpg)",
            opacity: 0.2
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold mb-4"
        style={gradientTextStyle}
      >
        Interior ca nou?
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        Rezervă acum și bucură-te de senzația unei mașini noi
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

export default InteriorDetailingSection;