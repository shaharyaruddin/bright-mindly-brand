'use client'
import React from "react";
import { MdArrowOutward, MdBook, MdSchool, MdAccessTime, MdPeople, MdNetworkCheck } from "react-icons/md";
import './KeyTakeaways.css';
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import Link from "next/link";

const takeaways = [
  {
    title: "Access High-Quality Educational Content",
    icon: MdBook,
  },
  {
    title: "Learn from Expert Educators",
    icon: MdSchool,
  },
  {
    title: "Flexible Learning Schedules",
    icon: MdAccessTime,
  },
  {
    title: "Engage with a Supportive Community",
    icon: MdPeople,
  },
  {
    title: "Earn Recognized Certifications",
    icon: FaCertificate,
  },
  {
    title: "Seamless Platform Integration",
    icon: MdNetworkCheck,
  },
];

const KeyTakeaways = () => {
  const headingText = "Unlock Your Potential with Our Academy".split(" ");
  const content =
    "Empower your future with personalized education designed to help you succeed.".split(
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
    <div className="bg-gradient-to-r relative from-white via-[#E3F2FD] to-[#E1F5FE] py-16 px-4 lg:px-32">
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={120}
        height={120}
        className="absolute z-10 top-12 right-4 opacity-30 filter-blue"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-48">
        {/* Card 1 */}
        <div className="max-w-xl">
          <span className="text-sm font-medium inline-flex items-center px-2.5 py-1 rounded mr-2">
            <MdBook className="text-[#0288D1] mr-1" />
            KEY TAKEAWAYS
          </span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4"
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
            className="text-gray-500 mb-6"
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

          <button className="bg-[#0288D1] flex cursor-pointer items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Enroll Now
          </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden h-[400px] relative">
          <div className="max-w-lg space-y-10 animate-scroll-up">
            {takeaways.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 lg:p-12 rounded-lg shadow-md">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm lg:text-base font-medium lg:font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <Icon className="w-8 h-8 text-[#0288D1]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;