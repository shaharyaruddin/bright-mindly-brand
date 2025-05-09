'use client';

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const headingText = "Why Learn With Us?".split(" ");
const content = "Empower your academic journey with cutting-edge resources, expert mentorship, and a personalized learning experience tailored to your goals.".split(" ");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#E7F0FF] via-[#F4F9FF] to-white py-12 px-4 relative sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex items-center mb-4">
          <span className="text-[#3B82F6] text-2xl mr-2">📚</span>
          <h2 className="text-base font-medium text-blue-800 uppercase">
            The EduPath Advantages
          </h2>
        </div>

        <motion.h1
          className="text-xl lg:text-4xl font-semibold text-gray-900 mb-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {headingText.map((word, index) => (
            <motion.span key={index} variants={childVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <Image
          src="/assets/images/bg1.svg"
          alt="education bg"
          width={110}
          height={110}
          className="md:block  hidden absolute top-32 right-28 opacity-30 filter-blue"
        />
        <Image
          src="/assets/images/bg2.svg"
          alt="education bg"
          width={110}
          height={110}
          className="md:block hidden absolute bottom-56 z-10 left-4 opacity-30 filter-blue"
        />

        <motion.p
          className="text-gray-700 text-base lg:text-base mb-8 max-w-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {content.map((word, index) => (
            <motion.span key={index} variants={childVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Feature 1 */}
          <div className="flex flex-col items-start border-r border-gray-200 p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl text-blue-600">🎓</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Expert Mentorship
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Learn from industry professionals and academic experts who guide you every step of the way.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start border-r border-gray-200 p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl text-blue-600">🧠</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Customized study paths that adapt to your pace, learning style, and goals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl text-blue-600">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Career-Oriented Growth
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Access job-ready skills, real-world projects, and resume-boosting certifications.
            </p>
          </div>
        </motion.div>

        {/* Marquee Section */}
        <div className="mt-12 py-6 mb-6">
          <Marquee play direction="right" speed={80}>
            <div className="flex gap-6 justify-around">
              {["Live Classes", "Skill Assessments", "Downloadable Resources", "Interactive Quizzes", "1:1 Mentorship", "Community Forums"].map((text, i) => (
                <div key={i} className="rounded-full px-6 py-3 border bg-[#F0F8FF] font-medium text-blue-700 border-white">
                  {text}
                </div>
              ))}
            </div>
          </Marquee>

          <Marquee play speed={80}>
            <div className="flex gap-6 justify-around mt-6">
              {["Certificate Courses", "Progress Tracking", "Group Study Sessions", "Internship Opportunities", "Flexible Schedules", "Expert Faculty"].map((text, i) => (
                <div key={i} className="rounded-full px-6 py-3 border bg-[#F0F8FF] font-medium text-blue-700 border-white">
                  {text}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
