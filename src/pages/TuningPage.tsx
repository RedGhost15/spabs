import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Wrench, Shield, Zap } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Partners from '../components/parteneri/Partners';
import ScrollBanner from '../components/ScrollBanner';
import { Link } from 'react-router-dom';



const steeringWheels = {
  BMW: {
    images: [
        { src: "/volane/bmwV1.png", styleNumber: "BMW-SW001" },
        { src: "/volane/bmwV2.png", styleNumber: "BMW-SW002" },
        { src: "/volane/bmwV3.png", styleNumber: "BMW-SW003" },
        { src: "/volane/bmwV4.png", styleNumber: "BMW-SW004" },
        { src: "/volane/bmwV5.png", styleNumber: "BMW-SW005" },
        { src: "/volane/bmwV6.png", styleNumber: "BMW-SW006" }
    ],
    modele: "Modele compatibile:",
    description: "E-series | F-series | G-series"
},
Audi: {
    images: [
        { src: "/volane/audiV1.png", styleNumber: "Audi-SW001" },
        { src: "/volane/audiV2.png", styleNumber: "Audi-SW002" },
        { src: "/volane/audiV3.png", styleNumber: "Audi-SW003" },
        { src: "/volane/audiV4.png", styleNumber: "Audi-SW004" },
        { src: "/volane/audiV5.png", styleNumber: "Audi-SW005" },
        { src: "/volane/audiV6.png", styleNumber: "Audi-SW006" }
    ],
    modele: "Modele compatibile:",
    description: "A1: 2015-2018 | A3: 2015-2020 | A4:2015-2020 | A5:2015-2019 | A6:2015-2018 | A7:2015-2018 | A8:2015-2022 | Q2:2017-2020 | Q3:2015-2021 | Q4 e-tron:2021-2024 | Q5 e-tron:2021-2024 | Q7:2015-2020 | Q8:2019-2021"
},
Porsche: {
    images: [
        { src: "/volane/porV1.png", styleNumber: "Porsche-SW001" },
        { src: "/volane/porV2.png", styleNumber: "Porsche-SW002" },
        { src: "/volane/porV3.png", styleNumber: "Porsche-SW003" },
        { src: "/volane/porV4.png", styleNumber: "Porsche-SW004" },
        { src: "/volane/porV5.png", styleNumber: "Porsche-SW005" },
        { src: "/volane/porV6.png", styleNumber: "Porsche-SW006" }
    ],
    modele: "Modele compatibile:",
    description: "911:2005-2018 | 718:2016-2020 | 918:2010-2016 | Cayman:2005-2016 | Boxter:2004-2016 | Panamera:2010-2020 | Cayenne:2006-2021 | Macan:2014-2021 | Taycan:2019-2021"
},
VW: {
    images: [
        { src: "/volane/vwV1.png", styleNumber: "VW-SW001" },
        { src: "/volane/vwV2.png", styleNumber: "VW-SW002" },
        { src: "/volane/vwV3.png", styleNumber: "VW-SW003" },
        { src: "/volane/vwV4.png", styleNumber: "VW-SW004" },
        { src: "/volane/vwV5.png", styleNumber: "VW-SW005" },
        { src: "/volane/vwV6.png", styleNumber: "VW-SW006" }
    ],
    modele: "Modele compatibile:",
    description: "Golf Mk6 / Mk7 / Mk7.5 / Mk8 | Polo:209-2022 | Passat B6 / B7 / B8 / B9 | Passat CC | Artheon | Tiguan | Touareg | Scirocco | Caddy | Transporter"
}
};

const gradientTextStyle = {
  background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent'
};

const TuningPage = () => {
  const [selectedBrand, setSelectedBrand] = useState('Porsche');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row1Ref, row1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row2Ref, row2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [row3Ref, row3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [carouselRef, carouselInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-gray-900">
      {/* Mini Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: "url(/hero/hero5.jpg)",
            filter: 'brightness(0.5)',
            transform: heroInView ? 'scale(1)' : 'scale(1.1)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={gradientTextStyle}
            initial={{ y: -20 }}
            animate={heroInView ? { y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Tuning & Chiptuning
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Puterea pe care o meriți
          </motion.p>
        </div>
      </motion.section>

      {/* Row 1: Benefits */}
      <motion.section
        ref={row1Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={row1InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-700/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">PERFORMANȚĂ SUPERIOARĂ</h3>
              <h2 className="text-3xl font-bold mb-6" style={gradientTextStyle}>Chiptuning!? De ce??</h2>
              <h3 className="text-xl font-semibold mb-4 text-white">Beneficii</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Creștere de putere și cuplu (10–35%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Scăderea consumului de combustibil
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Răspuns mai prompt al motorului
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  +20–35% putere pentru motoare turbo, +6–12% pentru aspirate
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  -0.3–0.8L/100km consum (până la 1L în unele cazuri)
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <img
                src="/tuning/tune1.jpg"
                alt="Engine performance"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Row 2: What is Chiptuning */}
      <motion.section
        ref={row2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={row2InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden group order-2 md:order-1">
              <img
                src="/tuning/tune2.jpg"
                alt="ECU tuning"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 order-1 md:order-2">
              <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">TECHNOLOGIE AVANSATĂ</h3>
              <h2 className="text-3xl font-bold mb-6" style={gradientTextStyle}>Ce înțelegem prin chiptuning?</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Detalii</h3>
                <p className="text-gray-300 leading-relaxed">
                  Chiptuningul înseamnă optimizarea softului ECU prin modificarea hărților de cuplu,
                  timpi de injecție, cantitatea de combustibil etc.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Proces</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Mașini vechi: schimbare chip (EPROM)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Mașini noi: rescriere soft prin OBD2, BDM, K-tag, J-tag
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Row 3: TDI Hot Start */}
      <motion.section
        ref={row3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={row3InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-700/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">SOLUȚII SPECIALIZATE</h3>
            <h2 className="text-3xl font-bold" style={gradientTextStyle}>Pornire la cald – motoare TDI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Problemă',
                content: 'Tipic la 1.9TDI și 2.0TDI (Golf, Audi, Seat, VW etc.)',
                icon: <Wrench className="h-8 w-8 text-blue-400 mb-4" />
              },
              {
                title: 'Soluție',
                content: 'Ajustare soft pentru uzură motor',
                icon: <Shield className="h-8 w-8 text-blue-400 mb-4" />
              },
              {
                title: 'Detalii',
                content: 'Procedură similară tuningului. Se garantează funcționarea perfectă a motorului.',
                icon: <Zap className="h-8 w-8 text-blue-400 mb-4" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 h-full"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Partners />

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={faqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">ÎNTREBĂRI FRECVENTE</h3>
            <h2 className="text-3xl font-bold" style={gradientTextStyle}>Răspunsuri la întrebările tale</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-center">
            {[
              {
                question: 'Chiptuningul afectează filtrul de particule (DPF/FAP)?',
                answer: 'Nu, funcțiile de regenerare rămân active.'
              },
              {
                question: 'Chiptuningul afectează cutia automată?',
                answer: 'Nu, cutia se adaptează modificărilor.'
              },
              {
                question: 'Cât durează operațiunea?',
                answer: 'Între 1 și 8 ore.'
              },
              {
                question: 'Se oferă garanție?',
                answer: 'Da, garanție nelimitată pe manoperă și soft.'
              },
              {
                question: 'Pot reveni la softul original?',
                answer: 'Da, salvăm backupul original înainte de orice intervenție.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{faq.question}</h3>
                <p className="text-gray-300 text-xl underline">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

{/* Steering Wheel Section */}
<motion.section
  ref={carouselRef}
  initial={{ opacity: 0, y: 50 }}
  animate={carouselInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="py-20 bg-gray-700/30 backdrop-blur-sm"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-12">
      <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">PERSONALIZARE AUTO</h3>
      <h2 className="text-3xl font-bold" style={gradientTextStyle}>Volane Personalizate</h2>
      <p className="text-xl text-gray-300 mt-4">Alege brandul tău preferat</p>
    </div>

    {/* Brand Selection */}
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-8"
      initial={{ opacity: 0 }}
      animate={carouselInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.4 }}
    >
      {Object.keys(steeringWheels).map((brand) => (
        <button
          key={brand}
          onClick={() => setSelectedBrand(brand)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedBrand === brand
              ? 'bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white shadow-lg'
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
          }`}
        >
          {brand}
        </button>
      ))}
    </motion.div>

    {/* Brand Description */}
    {selectedBrand && (
      <motion.div
      initial={{ opacity: 0 }}
      animate={carouselInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.6 }}
      className="text-center text-gray-300 text-sm sm:text-base max-w-4xl mx-auto mb-8 px-4 min-h-[5rem]" // Set the fixed height here
    >
      <h4 className="font-semibold text-blue-400">{steeringWheels[selectedBrand].modele}</h4>
      <p>{steeringWheels[selectedBrand].description}</p>
    </motion.div>
    )}

    {/* Custom Navigation Arrows (hidden on mobile) */}
    <div className="hidden lg:block">
      <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500/30 cursor-pointer transition-colors">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 hover:bg-blue-500/30 cursor-pointer transition-colors">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>

    {/* Steering Wheels Carousel */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
        disabledClass: 'opacity-30 cursor-default pointer-events-none'
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
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
      {steeringWheels[selectedBrand]?.images.map((wheel, index) => (
        <SwiperSlide key={index}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col"
            style={{
              minHeight: '400px',
              width: '100%',
            }}
          >
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden group">
              <img
                src={wheel.src}
                alt={wheel.styleNumber}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{wheel.styleNumber}</h3>
            <p className="text-gray-300 text-sm mb-4">{steeringWheels[selectedBrand].description}</p>
            <div className="mt-auto">
              <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                {selectedBrand}
              </span>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</motion.section>


      {/* BANNER */}
      <ScrollBanner />

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-900/90 backdrop-blur-sm relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-1000"
          style={{
            backgroundImage: "url(/cta/cta2.jpg)",
            transform: ctaInView ? 'scale(1)' : 'scale(1.1)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Contactează-ne pentru tuningul tău personalizat
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Transformă-ți mașina în visul tău cu ajutorul experților noștri
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#23538A]/50"
            >
              Contactează-ne
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TuningPage;