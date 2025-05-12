'use client'
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const Product = () => {
  const headingText1 = "AI-Powered Learning".split(" ");
  const content1 =
    "Enhance your education with AI-driven tools that personalize your learning experience, ensuring optimal progress and engagement.".split(" ");
  const headingText2 = "Real-Time Progress Tracking".split(" ");
  const content2 =
    "Monitor your learning journey with detailed analytics and instant updates, giving you full insight into your achievements and areas for growth.".split(" ");
  const headingText3 = "Customizable Study Plans".split(" ");
  const content3 =
    "Choose learning plans tailored to your goals, with flexible options that adapt to your schedule and aspirations.".split(" ");

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

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="product"
      className="bg-gradient-to-b relative from-[#E3F2FD] to-white py-16 px-4 lg:px-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div
          className="order-1"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/product.svg"
              alt="product"
              width={20}
              height={20}
              className="filter-blue"
    
            />
            Feature
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {headingText1.map((word, index) => (
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
            className="text-gray-700 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content1.map((word, index) => (
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
          
          <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B] flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Enroll Now
          </button>
          </Link>
        </motion.div>
        <motion.div
          className="order-2 bg-[#F5FAFE] p-4 rounded-md flex justify-center items-center"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/ai.jpeg"
            alt="Learning"
            width={600}
            height={200}
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="max-w-lg order-4 md:order-3 bg-[#F5FAFE] rounded-md flex justify-center items-center"
          variants={cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/progress.jpg"
            alt="Progress"
            width={600}
            height={200}
            className="w-full max-w-md h-auto"
          />
        </motion.div>
        <motion.div
          className="order-3"
          variants={cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/product.svg"
              alt="product"
              width={20}
              height={20}
              className="filter-blue"
            />
            Feature
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {headingText2.map((word, index) => (
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
            className="text-gray-700 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content2.map((word, index) => (
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
          
          <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B] flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Enroll Now
          </button>
          </Link>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="order-5"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/product.svg"
              alt="product"
              width={20}
              height={20}
              className="filter-blue"

            />
            Feature
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {headingText3.map((word, index) => (
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
            className="text-gray-700 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content3.map((word, index) => (
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
          
          <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01559B] flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Enroll Now
          </button>
          </Link>
        </motion.div>
        <motion.div
          className="order-6 bg-[#F5FAFE] p-4 rounded-md flex justify-center items-center"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/studyplan.png"
            alt="Study Plan"
            width={600}
            height={200}
            className="w-full max-w-md h-auto"
          />
        </motion.div>
      </div>

      {/* FOR RIGHT SIDE OF BG */}
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={120}
        height={120}
        className="md:block hidden absolute z-10 top-4 left-64 md:left-[30rem] filter-blue opacity-30"
      />
    </div>
  );
};

export default Product;