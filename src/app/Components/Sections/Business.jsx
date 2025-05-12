'use client'
import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Business = () => {
  const headingText = "Begin Your Learning Journey with Our Academy Today".split(" ");
  const content =
    "Unlock your potential with tailored courses and expert guidance. Start now to elevate your skills and achieve your goals.".split(
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
    <div className="bg-gradient-to-r relative from-[#E3F2FD] via-[#E1F5FE] to-[#F5FAFE] py-12 px-6 flex flex-col items-center justify-center text-center">
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={120}
        height={120}
        className="md:block hidden absolute z-10 top-12 left-16 opacity-30 filter-blue"
      />
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={170}
        height={170}
        className="md:block hidden absolute z-10 bottom-4 right-1/4 opacity-30 filter-blue"
      />
      <div className="flex gap-2 items-center mb-4">
        <span className="text-[#0288D1] text-3xl">📚</span>
        <h1 className="text-3xl font-bold text-gray-800">LearnHub</h1>
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

                <Link href='/Enroll-now'>

      <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B] flex items-center gap-3 text-white px-6 py-3 rounded-md">
        <MdArrowOutward />
        Enroll Now
      </button>
      </Link>
    </div>
  );
};

export default Business;