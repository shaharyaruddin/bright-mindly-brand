'use client';
import React from 'react';
import { motion } from 'framer-motion';

const EnrollPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E7F0FF] via-[#F4F9FF] to-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white rounded-3xl shadow-md p-8"
      >
        <h2 className="text-xl lg:text-4xl font-bold mb-8 text-center text-gray-900">Join Our Courses</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9EFF] transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9EFF] transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Course</label>
            <select
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9EFF] transition-all duration-300 text-gray-600"
              defaultValue=""
              required
            >
              <option value="" disabled>Select a course</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Fullstack Development</option>
            </select>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B]   text-white py-3 rounded-lg font-semibold  transition-all duration-300 shadow-md"
          >
            Enroll Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EnrollPage;