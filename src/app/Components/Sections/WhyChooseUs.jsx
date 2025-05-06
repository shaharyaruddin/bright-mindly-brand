import React from "react";
import Marquee from "react-fast-marquee";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#F5F8EB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4">
          <span className="text-[#A8D163] text-2xl mr-2">★</span>
          <h2 className="text-base font-medium text-gray-800 uppercase ">
            The Clover Advantages
          </h2>
        </div>

        <h1 className="text-xl lg:text-4xl font-medium text-gray-900 mb-4">
          Why Choose Us?
        </h1>
        <p className="text-gray-600 text-base lg:text-base mb-8 max-w-xl">
          Leverage the power of AI to automatically optimize your purchases,
          ensuring you get the best value for your business with every
          transaction.
        </p>

        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-start border border-l-0 border-t-0 border-b-0 border-r-0 lg:border-r border-gray-200 p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-2xl w-64 font-semibold text-gray-900 mb-2">
              AI-Optimized Savings – No Effort Required
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Never miss an opportunity to save. Unlike traditional cards, our
              AI dynamically adjusts to maximize your savings on every purchase
              in real-time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start border border-l-0 border-t-0 border-b-0 border-r-0 lg:border-r border-gray-200 p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl w-64 font-semibold text-gray-900 mb-2">
              Real-Time Insights – Smarter Spending
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Stay in control with detailed analytics. Widen provides
              transparent spending reports and intelligent insights to guide
              your financial decisions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-2xl w-64 font-semibold text-gray-900 mb-2">
              Flexible Plans – Tailored for You
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Adaptive plans adjust monthly, ensuring you always get the best
              savings, rewards, and maximum optimal value for your business
              needs.
            </p>
          </div>
        </div>

        <div className="mt-12 py-6 mb-6 bg-[#F5F8EB]">
          <div className="flex gap-8 ">
            <Marquee play direction="right" speed={100}>
              <div className="flex  gap-6 justify-around">
                <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                  Secure Transactions
                </div>
                <div className=" rounded-full px-6 py-3 font-medium shadow-sm">
                  Dedicated Support
                </div>
                <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                  Automatic Adjustments
                </div>
                <div className=" rounded-full px-6 py-3 font-medium shadow-sm">
                  Real-Time Reports
                </div>

                <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                  Secure Transactions
                </div>
                <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                  Real-Time Reports
                </div>
              </div>
            </Marquee>
          </div>

          <Marquee play speed={100}>
            <div className="flex gap-6 justify-around mt-6 ">
              <div className=" rounded-full px-6 py-3 font-medium shadow-sm">
                Smart Spending
              </div>
              <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                Customizable Plans
              </div>
              <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                Instant Savings
              </div>
              <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                Flexible Payments
              </div>
              <div className=" rounded-full px-6 py-3  font-medium shadow-sm">
                Flexible Payments
              </div>
              <div className=" rounded-full px-6 py-3 font-medium shadow-sm">
                Smart Spending
              </div>
              <div className=" rounded-full px-6 py-3 font-medium shadow-sm mx-6">
                Customizable Plans
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
