'use client'
import Image from 'next/image'
import React from 'react'
import { HiBolt } from 'react-icons/hi2'
import { motion } from "framer-motion";

const headingText = "How We Help You Learn".split(' ')
const content = "Our learning approach is designed to guide you step-by-step, making complex concepts simple and enjoyable through interactive content and personalized support.".split(' ')

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

const steps = [
  {
    number: '01',
    title: 'Easy Enrollment',
    points: [
      'Quick sign-up with guided steps.',
      'No technical knowledge needed.',
      'Access courses immediately after joining.',
    ],
  },
  {
    number: '02',
    title: 'Interactive Lessons',
    points: [
      'Engaging videos, quizzes, and challenges.',
      'Content tailored to different learning styles.',
      'Track your progress and revisit anytime.',
    ],
  },
  {
    number: '03',
    title: 'One-on-One Support',
    points: [
      'Live doubt sessions with mentors.',
      'Email and chat support 24/7.',
      'Clear guidance throughout your learning journey.',
    ],
  },
  {
    number: '04',
    title: 'Flexible Learning',
    points: [
      'Learn at your own pace.',
      'Access from any device, anytime.',
      'Courses adapted to your level and goals.',
    ],
  },
];

const OurApproach = () => {
  return (
    <div id='changelog' className="bg-gradient-to-r from-white via-[#F0F6FF] to-[#D6E8FF] py-16 px-4 lg:px-32 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <p className="flex font-medium text-sm gap-2 mb-2">
            <HiBolt className="text-lg text-blue-500" />
            LEARNING PATH
          </p>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
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
          <motion.p className="text-gray-700 max-w-2xl mb-12"
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

          {/* Right Side BG Image */}
          <Image
            src="/assets/images/bg.svg"
            alt="bg"
            width={110}
            height={110}
            className="md:block hidden absolute top-32 right-28 opacity-30 filter-blue"
          />
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-left shadow-sm border border-gray-100"
            >
              <span className="text-gray-800 bg-[#E7F2FF] p-1.5 text-sm rounded-full font-semibold">{step.number}</span>
              <h3 className="text-2xl font-medium mt-6 mb-4 text-gray-900">{step.title}</h3>
              <ul className="space-y-2">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex items-center justify-center text-xl text-blue-600 mr-2">•</span>
                    <span className="flex items-center justify-center text-gray-800 mt-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default OurApproach
