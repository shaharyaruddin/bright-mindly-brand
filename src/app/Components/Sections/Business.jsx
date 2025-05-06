import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Business = () => {
  return (
    <div className="bg-gradient-to-r from-[#FAFFEF] via-[#F3FFD9] to-[#FDFFF9] py-12 px-6 flex flex-col items-center justify-center text-center">
      {/* Logo and Brand Name */}
      <div className="flex gap-2 items-center mb-4">
      <span className="text-green-600 text-3xl">☘</span>

        <h1 className="text-3xl font-bold text-gray-800">Clover</h1>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-4xl max-w-2xl font-[550] text-gray-900 mb-4 ">
        Start Saving More and Streamlining Your Business Today.
      </h2>

      {/* Subheading */}
      <p className=" text-gray-900 mb-6 max-w-2xl">
        Experience the power of automated savings and optimized spending. Get started now to boost your business efficiency and maximize returns.
      </p>

      <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-6 py-3 rounded-md">
                  <MdArrowOutward />
                  Get Started
                </button>

    </div>
  );
};

export default Business;