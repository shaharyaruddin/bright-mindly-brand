'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const FAQ = () => {
  const headingText = "Have Questions About Our Academy?".split(" ");
  const content =
    "We’re here to guide you. Browse our frequently asked questions to learn more about our educational offerings and support.".split(
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

  const faqs = [
    {
      question: "How do you ensure the quality of courses?",
      answer:
        "Our courses are designed by certified educators and industry experts, with regular updates to maintain relevance and high standards.",
    },
    {
      question: "Can I access courses on multiple devices?",
      answer:
        "Yes! Our platform is fully responsive, allowing you to access courses seamlessly on desktops, tablets, and smartphones.",
    },
    {
      question: "How long does it take to complete a course?",
      answer:
        "Course durations vary, but most can be completed at your own pace, with flexible timelines to suit your schedule.",
    },
    {
      question: "What kind of support is available for students?",
      answer:
        "We offer 24/7 support via email and live chat, plus dedicated mentors for premium users to ensure a smooth learning experience.",
    },
    {
      question: "Are certificates recognized by employers?",
      answer:
        "Our certificates are industry-recognized and designed to enhance your resume, showcasing your skills to potential employers.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gradient-to-r from-[#E3F2FD] via-[#F5FAFE] to-[#FFFFFF] relative py-16 px-4 lg:px-32">
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={120}
        height={120}
        className="absolute z-10 top-64 right-84 opacity-30 filter-blue"
      />

      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FaQuestion className="text-white text-2xl p-1.5 rounded-full bg-[#0288D1]" />
              <span className="font-medium">FAQ'S</span>
            </div>
          </div>

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
        className="max-w-4xl bg-white p-4 md:p-10 mb-8 rounded-xl mx-auto shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white shadow-md rounded-lg border border-gray-100"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-medium text-gray-800">{faq.question}</h3>
              <span className="text-xl font-bold text-[#0288D1]">
                {expanded === index ? <IoClose /> : <IoMdAdd />}
              </span>
            </div>
            {expanded === index && faq.answer && (
              <div className="text-sm max-w-2xl p-4 pt-0 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;