import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Sayed Hussein</h3>
            <p className="text-gray-400">Senior Application Support Engineer & Developer</p>
            <p className="text-gray-500 text-sm mt-2">El Minya, Egypt</p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href="mailto:sayed.hussein.elsayed@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              sayed.hussein.elsayed@gmail.com
            </a>
            <a
              href="tel:+201008915894"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              +20 100 891 5894
            </a>
            <a
              href="https://www.linkedin.com/in/sayed-hussein-ba2685b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h4 className="text-lg font-semibold mb-3">Languages</h4>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <p className="font-medium">Arabic</p>
                <p className="text-sm text-gray-400">Native</p>
              </div>
              <div className="text-center">
                <p className="font-medium">English</p>
                <p className="text-sm text-gray-400">Advanced (C1)</p>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {new Date().getFullYear()} Sayed Hussein. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of coffee</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors duration-200"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;