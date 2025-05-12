'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E7F0FF] via-[#F4F9FF] to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8"
      >
        <h2 className="text-xl lg:text-3xl font-bold mb-8 text-center text-gray-900">Start Your Learning Journey</h2>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
            <select
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9EFF] transition-all duration-300 text-gray-600"
              defaultValue=""
              required
            >
              <option value="" disabled>Select your interest</option>
              <option value="online-courses">Online Courses</option>
              <option value="certifications">Certifications</option>
              <option value="tutoring">Tutoring</option>
              <option value="workshops">Workshops</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9EFF] transition-all duration-300 placeholder-gray-400"
              placeholder="Enter your phone number"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B]   text-white py-3 rounded-lg font-semibold  transition-all duration-300 shadow-md"
          >
            Get Started
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default GetStartedPage;