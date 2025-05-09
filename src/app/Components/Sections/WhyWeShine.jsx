"use client";
import React from "react";
import { MdOutlineSupportAgent, MdInsights, MdLibraryBooks } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { FaChalkboardTeacher, FaLock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiBolt } from "react-icons/hi2";

const headingText = "Why Choose Our Platform?".split(" ");
const content =
  "Empowering learners with the tools and guidance they need to succeed — anytime, anywhere. From expert support to smart learning features, we make education effective and engaging.".split(" ");

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
  {
    icon: <MdLibraryBooks className="text-3xl text-blue-600" />,
    title: "Rich Learning Resources",
    description:
      "Access a wide range of curated study materials, lectures, and assignments tailored for academic success at every level.",
  },
  {
    icon: <MdInsights className="text-3xl text-blue-600" />,
    title: "Progress Tracking",
    description:
      "Monitor your growth with intelligent insights and progress reports designed to keep you motivated and on track.",
  },
  {
    icon: <BiBrain className="text-3xl text-blue-600" />,
    title: "Smart Learning",
    description:
      "AI-powered suggestions adapt to your performance and learning style, offering personalized study paths and practice.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
    title: "Expert Mentorship",
    description:
      "Get help from experienced educators through live sessions, forums, and one-on-one mentorship tailored to your needs.",
  },
  {
    icon: <FaLock className="text-3xl text-blue-600" />,
    title: "Safe & Secure",
    description:
      "We prioritize your privacy and safety with secure logins, encrypted data, and safe learning environments.",
  },
  {
    icon: <MdOutlineSupportAgent className="text-3xl text-blue-600" />,
    title: "24/7 Student Support",
    description:
      "Have questions or need guidance? Our dedicated support team is here to help you anytime, day or night.",
  },
];

const WhyWeShine = () => {
  return (
    <div
      id="benefits"
      className="bg-gradient-to-r relative from-white via-[#F0F6FF] to-[#E6F0FF] py-16 px-4 lg:px-32"
    >
      <div>
        <p className="flex font-medium text-sm gap-2 mb-2">
          <HiBolt className="text-lg text-blue-500" />
          BENEFITS
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
          className="text-gray-700 max-w-xl mb-12"
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

        <Image
          src="/assets/images/bg.svg"
          alt="education bg"
          width={110}
          height={110}
          className="md:block hidden absolute top-32 right-28 opacity-40 filter-blue"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base">{item.description}</p>
              <div className="absolute top-4 right-4 bg-blue-100 rounded-full p-1.5 text-blue-400">
                <HiBolt />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyWeShine;
