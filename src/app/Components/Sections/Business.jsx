'use client'
import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const Business = () => {
  const headingText = "Start Saving More and Streamlining Your Business Today.".split(" ");
  const content =
    "Experience the power of automated savings and optimized spending. Get started now to boost your business efficiency and maximize returns.".split(
      " "
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-r relative from-[#FAFFEF] via-[#F3FFD9] to-[#FDFFF9] py-12 px-6 flex flex-col items-center justify-center text-center">
      <Image
        src="/assets/images/bg.svg"
        alt="bg"
        width={110}
        height={110}
        className="absolute z-10 top-12 left-16 opacity-40"
      />
      <Image
        src="/assets/images/bg3.svg"
        alt="bg"
        width={170}
        height={170}
        className="absolute z-10 bottom-4 right-1/4 opacity-40"
      />
      <div className="flex gap-2 items-center mb-4">
        <span className="text-green-600 text-3xl">☘</span>
        <h1 className="text-3xl font-bold text-gray-800">Clover</h1>
      </div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-4xl max-w-2xl font-[550] text-gray-900 mb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {headingText.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-gray-900 mb-6 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {content.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-6 py-3 rounded-md">
        <MdArrowOutward />
        Get Started
      </button>
    </div>
  );
};

export default Business;