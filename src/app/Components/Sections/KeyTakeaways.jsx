'use client'
import React from "react";
import { MdArrowOutward, MdInventory, MdSavings, MdAttachMoney, MdBarChart, MdAccountBalance, MdPieChart } from "react-icons/md";
import './KeyTakeaways.css';
import Image from "next/image";
import { motion } from "framer-motion";

const takeaways = [
  {
    title: "Maximize Your Business Savings Potential",
    icon: MdSavings,
  },
  {
    title: "Experience Fully Automated Business Savings",
    icon: MdAttachMoney,
  },
  {
    title: "Efficient Expense Management Tools",
    icon: MdBarChart,
  },
  {
    title: "Track Every Transaction with Ease",
    icon: MdInventory,
  },
  {
    title: "Customizable Budget Planning Options",
    icon: MdPieChart,
  },
  {
    title: "Seamless Integration with Banking Systems",
    icon: MdAccountBalance,
  },
];

const KeyTakeaways = () => {
  const headingText = "Maximize Your Savings with Smart Automation".split(" ");
  const content =
    "Save effortlessly with smart automation that maximizes rewards on every purchase, tailored to your needs.".split(
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
    <div className="bg-gradient-to-r relative from-white via-[#FAFFF1] to-[#F4FFDF] py-16 px-4 lg:px-32">
      <Image
        src="/assets/images/bg.svg"
        alt="bg"
        width={110}
        height={110}
        className="absolute z-10 top-12 right-4 opacity-40"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-48">
        {/* Card 1 */}
        <div className="max-w-xl">
          <span className="text-green-500 text-sm font-medium inline-flex items-center px-2.5 py-1 rounded mr-2">
            <MdInventory className="mr-1" />
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
          <button className="bg-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden h-[400px] relative">
          <div className="max-w-lg space-y-10 animate-scroll-up">
            {takeaways.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 lg:p-12 rounded-lg shadow">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm lg:text-base font-medium lg:font-semibold text-[#24261A]">
                      {item.title}
                    </h3>
                    <Icon className="w-8 h-8 text-gray-800" />
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