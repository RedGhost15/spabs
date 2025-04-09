import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            backgroundImage: "url(/hero/hero6.jpg)",
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
            Contactează-ne!
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Suntem aici pentru mașina ta
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Details Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">LOCAȚIE & PROGRAM</h3>
            <h2 className="text-3xl font-bold" style={gradientTextStyle}>Cum ne găsești?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-700/50">
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.27829579189995!2d25.445165712218255!3d44.91277168061125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f560c11a862b%3A0x1eea079e39155a42!2sPAB%20CUSTOM%20TUNNING!5e1!3m2!1sro!2sro!4v1744130021640!5m2!1sro!2sro'
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white">Date de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Adresă</h4>
                    <p className="text-gray-300">Strada Laminorului 4 B, Târgoviște 130034</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Telefon</h4>
                    <p className="text-gray-300">0768079999</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email</h4>
                    <p className="text-gray-300">contact@pabcustom.ro</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Program</h4>
                    <div className="text-gray-300">
                      <p>Luni–Vineri: 09:00–18:00</p>
                      <p>Sâmbătă: 10:00–15:00</p>
                      <p>Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        animate={formInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-700/30 backdrop-blur-sm"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-blue-400 text-lg font-semibold mb-2 tracking-wider">TRIMITE UN MESAJ</h3>
              <h2 className="text-3xl font-bold mb-2" style={gradientTextStyle}>Scrie-ne</h2>
              <p className="text-gray-300">Ai o întrebare? Scrie-ne!</p>
            </div>

            {submitted ? (
              <div className="text-center text-green-400 text-lg bg-green-900/30 p-4 rounded-lg">
                Mulțumim, revenim în curând!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Număr de telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subiect *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#23538A]/50"
                >
                  Trimite mesajul
                </button>
              </form>
            )}
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
                question: 'Cât de repede primesc răspuns?',
                answer: 'În general, răspundem în aceeași zi lucrătoare.'
              },
              {
                question: 'Pot face o programare direct prin acest formular?',
                answer: 'Da, lasă detaliile și te contactăm pentru confirmare.'
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
            backgroundImage: "url(/cta/cta7.jpg)",
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
            Hai să discutăm despre mașina ta!
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Suntem aici să îți oferim cele mai bune soluții pentru vehiculul tău.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <a
              href="tel:+40723000000"
              className="inline-block bg-gradient-to-r from-[#A7CFDF] to-[#23538A] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#23538A]/50"
            >
              Sună-ne acum
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;