import React from "react";
import { MdArrowOutward, MdInventory, MdSavings, MdAttachMoney, MdBarChart, MdAccountBalance, MdPieChart } from "react-icons/md";
import './KeyTakeaways.css';

const takeaways = [
  {
    title: "Maximize Your Business Savings Potential",
    icon: MdSavings,
  },
  {
    title: "Experience Fully Automated Business Savings",
    icon: MdAttachMoney,
  },
  {
    title: "Efficient Expense Management Tools",
    icon: MdBarChart,
  },
  {
    title: "Track Every Transaction with Ease",
    icon: MdInventory,
  },
  {
    title: "Customizable Budget Planning Options",
    icon: MdPieChart,
  },
  {
    title: "Seamless Integration with Banking Systems",
    icon: MdAccountBalance,
  },
];

const KeyTakeaways = () => {
  return (
    <div className="bg-gradient-to-r from-white via-[#FAFFF1] to-[#F4FFDF] py-16 px-4 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-48">
        {/* Card 1 */}
        <div className="max-w-xl">
          <span className="text-green-500 text-sm font-medium inline-flex items-center px-2.5 py-1 rounded mr-2">
            <MdInventory className="mr-1" />
            KEY TAKEAWAYS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Maximize Your Savings with Smart Automation
          </h2>
          <p className="text-gray-500 mb-6">
            Save effortlessly with smart automation that maximizes rewards on
            every purchase, tailored to your needs.
          </p>
          <button className="bg-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden h-[400px] relative">
          <div className="max-w-lg space-y-10 animate-scroll-up ">
            {takeaways.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 lg:p-12 rounded-lg shadow">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm lg:text-base font-medium lg:font-semibold text-[#24261A]">
                      {item.title}
                    </h3>
                    <Icon className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;
