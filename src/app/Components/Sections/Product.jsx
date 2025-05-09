"use client";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Product = () => {
  const headingText1 = "AI-Driven Savings".split(" ");
  const content1 =
    "Save more on every purchase with AI-powered optimization that ensures you get the best possible value for your business, automatically.".split(" ");
  const headingText2 = "Real-Time Insights".split(" ");
  const content2 =
    "Track your spending with detailed analytics and real-time updates, giving you full transparency and control over every transaction.".split(" ");
  const headingText3 = "Customizable Plans".split(" ");
  const content3 =
    "Choose flexible plans designed to grow with your business, offering personalized options that adapt to meet your unique needs.".split(" ");

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
      className="bg-gradient-to-b relative from-[#F4FFDF] to-white py-16 px-4 lg:px-32"
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
            />
            Product
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
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="order-2 bg-[#FEFEFE] p-4 rounded-md flex justify-center items-center"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/revenue.svg"
            alt="Revenue"
            width={600}
            height={200}
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="max-w-lg order-4 md:order-3 bg-[#FEFEFE] rounded-md flex justify-center items-center"
          variants={cardVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/sales.svg"
            alt="Sales"
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
            />
            Product
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
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
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
            />
            Product
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
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="order-6 bg-[#FEFEFE] p-4 rounded-md flex justify-center items-center"
          variants={cardVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/sales-details.svg"
            alt="Sales Details"
            width={600}
            height={200}
            className="w-full max-w-md h-auto"
          />
        </motion.div>
      </div>

      {/* FOR RIGHT SIDE OF BG */}
      <Image
        src="/assets/images/bg.svg"
        alt="bg"
        width={110}
        height={110}
        className="md:block hidden absolute z-10 top-4 left-64 md:left-[30rem] opacity-40"
      />
    </div>
  );
};

export default Product;