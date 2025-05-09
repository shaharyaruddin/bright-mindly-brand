'use client';
import Head from 'next/head';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { RxQuestionMarkCircled } from 'react-icons/rx';
import { motion } from 'framer-motion';

// Extend Next.js Image component to support Framer Motion
const MotionImage = motion(Image);

const headingText = 'Empower Your Learning Journey With Smart Education Tools.'.split(' ');
const paragraphText = 'EduSpark helps students and educators thrive with AI-powered tools, personalized learning paths, and streamlined academic management.'.split(' ');

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
      ease: 'easeOut',
    },
  },
};

// Animation variants for zoom-in and zoom-out effect
const imageVariants = {
  animate: {
    scale: [1, 1.1, 1], // Scale from 1 to 1.1 and back to 1
    transition: {
      duration: 2, // Duration of one cycle
      ease: 'easeInOut',
      repeat: Infinity, // Repeat indefinitely
    },
  },
};

export default function Home() {
  return (
    <div id='home' className="flex flex-col px-3 items-center justify-center min-h-[33rem] bg-gradient-to-r from-white relative via-[#E9F4FF] to-white">
      <Head>
        <title>BrightMindly</title>
      </Head>
      <div className="text-center">
        <motion.div className="bg-[#D1EBFF] py-1.5 flex justify-center w-fit mx-auto px-4 mb-8 rounded-full">
          <p className="text-[#132B44] font-medium text-sm">
            Trusted by 100,000+ Students & Teachers
          </p>
        </motion.div>

        <MotionImage
          src="/assets/images/education.png"
          alt="book"
          width={200}
          height={200}
          className="absolute bottom-3 lg:top-68 right-8 lg:right-64 w-36 h-36 md:w-[200px] md:h-[200px]"
          variants={imageVariants}
          animate="animate"
        />

        <MotionImage
          src="/assets/images/book.webp"
          alt="student"
          width={200}
          height={200}
          className="lg:block hidden bg-transparent absolute bottom-24 left-48"
          variants={imageVariants}
          animate="animate"
        />

        <motion.h1
          className="font-sans max-w-5xl italic text-3xl lg:text-6xl font-[550] mb-4"
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
          className="text-[#132B44] mb-6 max-w-xl mx-auto"
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
          <button className="flex items-center gap-3 cursor-pointer bg-[#EAF6FF] text-[#132B44] px-5 py-3 rounded-md">
            <RxQuestionMarkCircled />
            Learn More
          </button>
          <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B] flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}