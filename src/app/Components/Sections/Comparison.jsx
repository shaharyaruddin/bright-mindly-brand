"use client";
import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Comparison = () => {
  const headingText = "Our Learning Academy vs. Other Platforms".split(" ");
  const content =
    "See how our academy excels with top-tier resources, expert mentors, and personalized learning journeys to help students thrive.".split(
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

  const features = [
    { name: "Expert Mentors", academy: "✔", rival: "—", institute: "—" },
    { name: "Tailored Learning Paths", academy: "✔", rival: "—", institute: "—" },
    { name: "Always-Accessible Resources", academy: "✔", rival: "—", institute: "—" },
    { name: "Dynamic Quizzes", academy: "✔", rival: "—", institute: "—" },
    { name: "One-on-One Guidance", academy: "✔", rival: "—", institute: "—" },
    { name: "Professional Certifications", academy: "✔", rival: "—", institute: "—" },
    { name: "Career Connections", academy: "✔", rival: "—", institute: "—" },
  ];

  return (
    <div id="comparison" className="bg-gradient-to-b from-[#E3F2FD] to-white relative py-16 px-4 lg:px-32">
      {/* FOR RIGHT SIDE OF BG */}
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={120}
        height={120}
        className="absolute z-10 top-40 right-60 opacity-30 filter-blue"
      />

      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <p className="flex justify-center font-medium gap-2 mb-6">
            <FaGraduationCap className="text-xl text-[#0288D1]" />
            COMPARISON
          </p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
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
          <motion.p
            className="text-gray-700 max-w-2xl mb-12"
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
        </div>
      </div>
      <motion.div
        className="max-w-4xl mx-auto bg-white p-0.5 border border-gray-100 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 text-center">
          <div className="font-semibold bg-[#F5FAFE] py-5 rounded-tl-xl px-4 text-gray-800">
            FEATURES
          </div>
          <div className="bg-[#E1F5FE] py-5 font-semibold flex items-center md:text-xl text-base justify-center px-4 text-gray-800">
            <span className="mr-2">📘</span>Our Academy
          </div>
          <div className="font-semibold bg-[#F5FAFE] py-5 px-4 text-gray-800">Rival Platform</div>
          <div className="hidden md:block font-semibold bg-[#F5FAFE] py-5 rounded-tr-xl px-4 text-gray-800">
            Institute
          </div>
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center py-7 text-sm font-medium px-4 border-t border-gray-100 text-gray-700">
                {feature.name}
              </div>
              <div className="py-6 px-4 border-t border-gray-100 text-base md:text-xl text-[#0288D1] font-semibold">
                {feature.academy}
              </div>
              <div className="py-6 px-4 border-t border-gray-100 font-semibold text-base md:text-xl text-gray-500">
                {feature.rival}
              </div>
              <div className="hidden md:block py-6 px-4 border-t border-gray-100 font-semibold text-base md:text-xl text-gray-500">
                {feature.institute}
              </div>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Comparison;  