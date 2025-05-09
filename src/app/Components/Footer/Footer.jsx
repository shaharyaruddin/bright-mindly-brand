'use client'
import React from 'react';
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-white py-12">
      <motion.div
        className="flex flex-col md:flex-row md:justify-between items-center max-w-7xl mx-auto px-4 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={childVariants}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#0288D1] text-xl">📚</span>
            <span className="text-gray-800 font-semibold text-lg">BrightMindly</span>
          </div>

          {/* Navigation under logo */}
          <nav className="flex text-sm gap-6 text-gray-500 mb-4">
            <motion.a
              href="#"
              className="hover:text-[#0288D1] transition-colors"
              variants={childVariants}
            >
              Courses
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[#0288D1] transition-colors"
              variants={childVariants}
            >
              Benefits
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[#0288D1] transition-colors"
              variants={childVariants}
            >
              Testimonials
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[#0288D1] transition-colors"
              variants={childVariants}
            >
              Pricing
            </motion.a>
          </nav>
        </motion.div>

        <motion.div
          className="flex gap-4 text-sm text-gray-500 items-center"
          variants={childVariants}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#0288D1' }}
            transition={{ duration: 0.2 }}
          >
            <FaInstagram size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#0288D1' }}
            transition={{ duration: 0.2 }}
          >
            <FaTiktok size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#0288D1' }}
            transition={{ duration: 0.2 }}
          >
            <FaLinkedin size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#0288D1' }}
            transition={{ duration: 0.2 }}
          >
            <FaYoutube size={18} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#0288D1' }}
            transition={{ duration: 0.2 }}
          >
            <FaTwitter size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Horizontal line */}
      <motion.hr
        className="my-6 border-gray-200 border-1 mx-0 lg:mx-28"
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      {/* Bottom: Copyright */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 lg:px-0 text-sm pb-12 text-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={childVariants}>
          © 2025 All rights reserved by BrightMindly
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;