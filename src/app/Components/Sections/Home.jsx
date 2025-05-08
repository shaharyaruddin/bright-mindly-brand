'use client'
import Head from "next/head";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { motion } from "framer-motion";

const headingText = "Put More Cash Back in Your Business Pocket.".split(" ");
const paragraphText = "Maximize savings with GreenClover, the AI-powered business card that optimizes every purchase, giving you unmatched value effortlessly.".split(" ");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};



export default function Home() {
  return (
    <div className="flex flex-col px-3 items-center justify-center min-h-screen bg-gradient-to-r from-white relative via-[#F8FFE9] to-white">
      <Head>
        <title>GreenClover</title>
      </Head>
      <div className="text-center">
        <motion.div className="bg-[#F0FFD1] py-1.5 flex justify-center w-fit mx-auto px-4 mb-8 rounded-full">
          <p className="text-[#1D1F13] font-medium text-sm">
            55,000+ trusted Businesses
          </p>
        </motion.div>
        <Image
          src="/assets/images/dollar.png"
          alt="dollar"
          width={200}
          height={200}
          className="absolute top-68 right-48"
        />
        <Image
          src="/assets/images/user.png"
          alt="user"
          width={200}
          height={200}
          className="bg-transparent absolute bottom-24 left-48"
        />
        <motion.h1
          className="max-w-5xl italic text-4xl lg:text-6xl font-[550] mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
        <motion.p
          className="text-[#1D1F13] mb-6 max-w-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {paragraphText.map((word, index) => (
            <motion.span
              key={index}
              variants={childVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="flex items-center gap-3 bg-[#F5F7F0] text-[#1D1F13] px-5 py-3 rounded-md">
            <RxQuestionMarkCircled />
            More Info
          </button>
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}