// components/Comparison.js
import React from "react";

import { FaStackExchange } from "react-icons/fa";

const Comparison = () => {
    const features = [
        { name: "AI-Powered Savings", clover: "✔", nectar: "—", proeco: "—" },
        { name: "Real-Time Insights", clover: "✔", nectar: "—", proeco: "—" },
        { name: "Customizable Plans", clover: "✔", nectar: "—", proeco: "—" },
        { name: "Customer Support", clover: "✔", nectar: "—", proeco: "—" },
        { name: "No Hidden Fees", clover: "✔", nectar: "—", proeco: "—" },
        { name: "AI Data Enhancement", clover: "✔", nectar: "—", proeco: "—" },
        { name: "Integrations", clover: "✔", nectar: "—", proeco: "—" },
      ];
      

  return (
    <div className="bg-gradient-to-t from-white via-[#FAFFF1] to-[#F4FFDF] py-16 px-4 lg:px-32">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <p className="flex justify-center font-medium gap-2 mb-6">
            <FaStackExchange className="text-xl text-[#A9ED42]" />
            COMPARISON
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Value vs. Competitor Value
          </h2>
          <p className="text-gray-700 max-w-2xl mb-12">
            Compare our SaaS to the competition and discover how we offer better
            value, more savings, and greater flexibility for your business.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-0.5 border border-white rounded-lg">
        <div className="grid grid-cols-3 md:grid-cols-4 text-center">
          <div className="font-medium bg-[#F7F8F5] py-5 rounded-tl-lg px-4">FEATURES</div>
          <div className="bg-[#F0FFD1] py-5 font-semibold flex items-center md:text-xl text-base justify-center px-4">
            <span className="mr-2">🌱</span>Clover
          </div>
          <div className="font-medium bg-[#F7F8F5] py-5  px-4">Nectar</div>
          <div className="hidden md:block font-medium bg-[#F7F8F5] py-5 rounded-tr-lg px-4">Proeco</div>
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center  justify-center py-7 text-xs font-[550] px-4 border-t border-gray-200">{feature.name}</div>
              <div className="py-6 px-4 border-t border-gray-200 text-base md:text-xl ">{feature.clover}</div>
              <div className="py-6 px-4 border-t border-gray-200 font-semibold text-base md:text-xl">{feature.nectar}</div>
              <div className="hidden md:block py-6 px-4 border-t border-gray-200 font-semibold text-base md:text-xl">{feature.proeco}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;