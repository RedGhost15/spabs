import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SprayCan as Spray, Car, Paintbrush as Paint, Shield, Lightbulb, Wrench } from 'lucide-react';


const Services = () => {

  const services = React.useMemo(() => ([
    {
      title: 'Detailing Exterior',
      description: 'Curățare și protecție completă a exteriorului, inclusiv vopsea, jante și ornamente.',
      icon: Car,
    },
    {
      title: 'Detailing Interior',
      description: 'Curățare profundă a tuturor suprafețelor interioare, materialelor textile și componentelor din piele.',
      icon: Spray,
    },
    {
      title: 'Corecție a Vopselei',
      description: 'Corectarea profesională a vopselei pentru a elimina zgârieturile fine, imperfecțiunile și urmele circulare.',
      icon: Paint,
    },
    {
      title: 'Acoperire Ceramică',
      description: 'Protecție ceramică de lungă durată pentru un luciu superior și durabilitate crescută.',
      icon: Shield,
    },
    {
      title: 'Recondiționare Faruri',
      description: 'Restabilește claritatea și luminozitatea farurilor învechite sau îngălbenite.',
      icon: Lightbulb,
    },
    {
      title: 'Curățare Compartiment Motor',
      description: 'Curățare amănunțită și tratarea componentelor din compartimentul motor.',
      icon: Wrench,
    },
  ]), []);


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #A7CFDF 0%, #23538A 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  };

  return (
    <section className="py-20 bg-gray-900 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
            style={gradientTextStyle}
          >
            Serviciile Noastre
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Descoperă soluțiile noastre profesionale de detailing auto
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#A7CFDF] to-[#23538A] group-hover:from-[#23538A] group-hover:to-[#A7CFDF] transition-all duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 pl-14">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;