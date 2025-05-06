import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Product = () => {
  return (
    <div className="bg-gradient-to-r from-white via-[#FAFFF1] to-[#F4FFDF] py-16 px-4 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="order-1 ">
          <span className="bg-green-100  text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded mr-2">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Product
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            AI-Driven Savings
          </h2>
          <p className="text-gray-700 mb-6">
            Save more on every purchase with AI-powered optimization that
            ensures you get the best possible value for your business,
            automatically.
          </p>
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>
        <div className="order-2 bg-[#FEFEFE] p-4 rounded-md">
          <Image 
            src="/assets/images/revenue.svg"
            alt="Revenue"
            width={600}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Card 2 */}
        <div className="order-4 md:order-3 bg-[#FEFEFE] p-4 rounded-md">
          <Image
            src="/assets/images/revenue.svg"
            alt="Revenue"
            width={600}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="order-3">
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded mr-2">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Product
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Real-Time Insights
          </h2>
          <p className="text-gray-700 mb-6">
            Track your spending with detailed analytics and real-time updates,
            giving you full transparency and control over every transaction.
          </p>
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className="order-5">
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded mr-2">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            Product
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Customizable Plans
          </h2>
          <p className="text-gray-700 mb-6">
            Choose flexible plans designed to grow with your business, offering
            personalized options that adapt to meet your unique needs.
          </p>
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>
        <div className="order-6 bg-[#FEFEFE] p-4 rounded-md">
          <Image
            src="/assets/images/revenue.svg"
            alt="Revenue"
            width={600}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;