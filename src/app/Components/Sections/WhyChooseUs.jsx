'use client';

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const headingText = "Why Choose Us?".split(" ");
const content = "Leverage the power of AI to automatically optimize your purchases, ensuring you get the best value for your business with every transaction.".split(' ');

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

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#F5FFDF] via-[#FBFFF2] to-[#FFFFFF] py-12 px-4 relative sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex items-center mb-4">
          <span className="text-[#A8D163] text-2xl mr-2">★</span>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            The Clover Advantages
          </h2>
        </div>

        <motion.h1
          className="text-xl lg:text-4xl font-[550] text-gray-900 mb-4"
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
        </motion.h1>

        {/* Background SVGs */}
        <Image
          src="/assets/images/bg.svg"
          alt="bg"
          width={110}
          height={110}
          className="absolute top-32 right-28 opacity-40"
        />
        <Image
          src="/assets/images/bg3.svg"
          alt="bg"
          width={110}
          height={110}
          className="absolute bottom-56 z-10 left-4 opacity-40"
        />

        {/* Animated Paragraph */}
        <motion.p
          className="text-gray-600 text-base lg:text-base mb-8 max-w-xl"
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

        {/* Animated Features */}
        <motion.div
          className="bg-white rounded-lg shadow-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Feature 1 */}
          <div className="flex flex-col items-start border-r border-gray-200 p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-2xl w-64 font-semibold text-gray-900 mb-2">
              AI-Optimized Savings – No Effort Required
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Never miss an opportunity to save. Unlike traditional cards, our
              AI dynamically adjusts to maximize your savings on every purchase
              in real-time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start border-r border-gray-200 p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl w-64 font-semibold text-gray-900 mb-2">
              Real-Time Insights – Smarter Spending
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay in control with detailed analytics. Widen provides
              transparent spending reports and intelligent insights to guide
              your financial decisions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-2xl w-64 font-semibold text-gray-900 mb-2">
              Flexible Plans – Tailored for You
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Adaptive plans adjust monthly, ensuring you always get the best
              savings, rewards, and maximum optimal value for your business
              needs.
            </p>
          </div>
        </motion.div>

        {/* Marquee Section */}
        <div className="mt-12 py-6 mb-6">
          <Marquee play direction="right" speed={100}>
            <div className="flex gap-6 justify-around">
              <div className="rounded-full px-6 py-3 border border-white bg-[#F7F8F5] font-medium">
                Secure Transactions
              </div>
              <div className="rounded-full px-6 py-3 font-medium border border-white bg-[#F7F8F5]">
                Dedicated Support
              </div>
              <div className="rounded-full px-6 py-3 font-medium border border-white bg-[#F7F8F5]">
                Automatic Adjustments
              </div>
              <div className="rounded-full px-6 py-3 font-medium border border-white bg-[#F7F8F5]">
                Real-Time Reports
              </div>
              <div className="rounded-full px-6 py-3 border border-white bg-[#F7F8F5] font-medium">
                Secure Transactions
              </div>
              <div className="rounded-full px-6 py-3 border border-white bg-[#F7F8F5] font-medium">
                Real-Time Reports
              </div>
            </div>
          </Marquee>

          <Marquee play speed={100}>
            <div className="flex gap-6 justify-around mt-6">
              <div className="rounded-full px-6 py-3 border border-white bg-[#F7F8F5] font-medium">
                Smart Spending
              </div>
              <div className="border border-white bg-[#F7F8F5] rounded-full px-6 py-3 font-medium">
                Customizable Plans
              </div>
              <div className="rounded-full px-6 py-3 border border-white bg-[#F7F8F5] font-medium">
                Instant Savings
              </div>
              <div className="rounded-full px-6 py-3 font-medium border border-white bg-[#F7F8F5]">
                Flexible Payments
              </div>
              <div className="rounded-full px-6 py-3 font-medium border border-white bg-[#F7F8F5]">
                Flexible Payments
              </div>
              <div className="rounded-full px-6 py-3 font-medium border border-white bg-[#F7F8F5]">
                Smart Spending
              </div>
              <div className="rounded-full px-6 py-3 font-medium mx-6 border border-white bg-[#F7F8F5]">
                Customizable Plans
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
