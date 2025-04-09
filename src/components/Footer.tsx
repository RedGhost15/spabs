import React from 'react';
import {  Mail, Phone, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';
import ShinyText from './shinyText/ShinyText'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
            <ShinyText text="PAB CUSTOM" disabled={false} speed={3} className='shinyText'  />
            </div>
            <p className="text-gray-400">
            Mașina ta merită ce e mai bun. Detailing profesional cu precizie și atenție la fiecare detaliu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Detailing', 'Tuning', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                  to={`/${item.toLowerCase()}`}
                  className='hover:text-blue-500 transition-colors duration-200'
                  onClick={() => window.scrollTo(0, 0)}>
                  {item}
                  </Link>
                </li>
                
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <a href="mailto:info@autoelite.com" className="hover:text-blue-500 transition-colors duration-200">
                  info@pabcustoms.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <a href="tel:+1234567890" className="hover:text-blue-500 transition-colors duration-200">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PabCustoms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;