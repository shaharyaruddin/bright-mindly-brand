"use client";
import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { MdInsights, MdOutlineSupportAgent } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { HiBolt } from "react-icons/hi2";
import { FaLock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";

const headingText = "Why We Shine?".split(" ");
const content =
  "Leverage the power of AI to automatically optimize your purchases, ensuring you get the best value for your business with every transaction.".split(
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
  {
    icon: <FiDollarSign className="text-3xl text-black" />,
    title: "Instant Savings",
    description:
      "Get immediate savings on every purchase, powered by AI to optimize your transactions in real-time. No setup required, just seamless savings.",
  },
  {
    icon: <MdInsights className="text-3xl text-black" />,
    title: "Real-Time Insights",
    description:
      "Access detailed spending reports and intelligent insights to make smarter financial decisions. Stay informed with transparency at every step.",
  },
  {
    icon: <BiTransfer className="text-3xl text-black" />,
    title: "Flexible Plans",
    description:
      "Choose customizable plans that adapt to your business’s unique needs, offering the flexibility to adjust as your requirements evolve.",
  },
  {
    icon: <FaLock className="text-3xl text-black" />,
    title: "Secure Transactions",
    description:
      "Every transaction is protected with the latest encryption technology, ensuring your business is always secure and your data safe.",
  },
  {
    icon: <IoMdSettings className="text-3xl text-black" />,
    title: "Adaptive Features",
    description:
      "Enjoy automatic adjustments to your savings and plans, tailored to match your business’s spending patterns and goals.",
  },
  {
    icon: <MdOutlineSupportAgent className="text-3xl text-black" />,
    title: "Dedicated Support",
    description:
      "Access personalized assistance whenever you need it from our expert support team, helping you make the most of your benefits.",
  },
];

const WhyWeShine = () => {
  return (
    <div
      id="benefits"
      className="bg-gradient-to-r relative from-white via-[#FAFFF1] to-[#F4FFDF] py-16 px-4 lg:px-32"
    >
      <div className=" ">
        <div>
          <p className="text-green-600 font-medium text-sm  gap-2 mb-2">
            <HiBolt className="text-lg" />
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

          {/* FOR RIGHT SIDE OF BG */}

          <Image
            src="/assets/images/bg.svg"
            alt="bg"
            width={110}
            height={110}
            className="md:block hidden absolute top-32 right-28 opacity-40"
          />
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: 1, duration: 0.8}}
        viewport={{once: true, amount: 0.2}}
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
              <div className="absolute top-4 right-4 bg-gray-200 rounded-full p-1.5 text-gray-400">
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
