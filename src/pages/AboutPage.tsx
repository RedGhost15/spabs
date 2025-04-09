import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Heart, Lightbulb } from 'lucide-react';
import ReviewsSection from '../components/ReviewsSection';

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expertiseRef, expertiseInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  };

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
            backgroundImage: "url('/hero/hero7.jpg')",
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
            Despre Noi
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Pasiunea noastră devine performanța ta
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        ref={storyRef}
        initial={{ opacity: 0, y: 50 }}
        animate={storyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">POVESTEA NOASTRĂ</h3>
              <h2 className="text-3xl font-bold mb-6" style={gradientTextStyle}>Cine suntem?</h2>
              <h3 className="text-xl font-semibold mb-4 text-white">Pasiune transformată în excelență</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  PAB Custom Detailing & Tuning s-a născut din dragostea pentru mașini și atenția la detalii.
                </p>
                <p>
                  Am început ca un mic atelier și am evoluat într-un spațiu complet dedicat îngrijirii și performanței auto.
                </p>
                <p>
                  Misiunea noastră: să oferim servicii premium, cu suflet, tehnologie și experiență.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80"
                alt="Our garage"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Expertise Section */}
      <motion.section
        ref={expertiseRef}
        initial={{ opacity: 0, y: 50 }}
        animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">EXPERTIZĂ SUPERIOARĂ</h3>
            <h2 className="text-3xl font-bold" style={gradientTextStyle}>De ce noi?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">Ce oferim</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Servicii premium de detailing interior & exterior
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Chiptuning profesional și personalizat
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Diagnosticări, codări și soluții pentru orice vehicul
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Peste 1000 de clienți mulțumiți
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">Cum lucrăm</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Consultanță individuală pentru fiecare client
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Tehnologie de ultimă generație
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Respectăm fiecare mașină ca și cum ar fi a noastră
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Garanție pentru lucrări și soft
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Highlight Section */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={teamInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">ECHIPA NOASTRĂ</h3>
            <h2 className="text-3xl font-bold" style={gradientTextStyle}>Profesioniști dedicați</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Specialiști",
                content: "Profesioniști cu experiență în detailing, tuning și diagnoză auto."
              },
              {
                title: "Pasiune",
                content: "Fiecare membru este un pasionat auto, nu doar un tehnician."
              },
              {
                title: "Încredere",
                content: "Relațiile cu clienții se bazează pe transparență și rezultate."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Aveți certificări sau autorizări?',
                answer: 'Da, suntem autorizați RAR și lucrăm doar cu echipamente profesionale.'
              },
              {
                question: 'Lucrați doar cu anumite mărci auto?',
                answer: 'Nu, acceptăm orice marcă, indiferent de an de fabricație.'
              },
              {
                question: 'Pot veni fără programare?',
                answer: 'Recomandăm programarea pentru a evita timpi de așteptare.'
              },
              {
                question: 'Cât durează o sesiune de detailing complet?',
                answer: 'În funcție de complexitate – între 3 și 8 ore.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">VALORILE NOASTRE</h3>
            <h2 className="text-3xl font-bold" style={gradientTextStyle}>Principii care ne ghidează</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-400 mx-auto mb-4" />,
                title: "Inovație",
                description: "Căutăm mereu metode mai bune, mai rapide, mai sigure."
              },
              {
                icon: <Wrench className="h-12 w-12 text-blue-400 mx-auto mb-4" />,
                title: "Încredere",
                description: "Construim relații pe termen lung, bazate pe calitate și comunicare."
              },
              {
                icon: <Heart className="h-12 w-12 text-blue-400 mx-auto mb-4" />,
                title: "Pasiune",
                description: "Pasiunea pentru auto se vede în fiecare detaliu."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 text-center"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <ReviewsSection />

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
            backgroundImage: "url('https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80')",
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
            Hai să ne cunoaștem mai bine!
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Descoperă diferența PAB Custom
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#23538A]/50"
            >
              Contactează-ne
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;