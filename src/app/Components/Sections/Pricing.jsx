import React from "react";
import { IoPricetag } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import {
  FaShieldAlt,
  FaUndo,
  FaShippingFast,
} from "react-icons/fa";
import { RiShareForward2Line } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
import { PiCrown } from "react-icons/pi";
import Image from "next/image";

const Pricing = () => {
  const plans = [
    {
      title: "Starter Plan",
      price: "$99/month",
      description:
        "Ideal for small businesses looking to streamline savings and boost efficiency effortlessly.",
      features: [
        "Core AI-powered savings features",
        "Real-time spending insights",
        "Basic customer support via email",
        "Access to standard reporting tools",
        "Monthly plan adjustments",
        "No long-term commitments",
      ],
      popular: false,
    },
    {
      title: "Pro Plan",
      price: "$199/month",
      description:
        "Designed for growing teams that need advanced tools to maximize value and performance.",
      features: [
        "Advanced AI optimization",
        "Detailed analytics",
        "Priority support via chat and email",
        "Flexible, customizable plan options",
        "Multi-user access for teams",
        "Monthly performance reviews",
      ],
      popular: true,
    },
    {
      title: "Enterprise Plan",
      price: "$299/month",
      description:
        "Perfect for large organizations seeking tailored solutions with dedicated support and features.",
      features: [
        "Tailored solutions for large-scale",
        "Dedicated account manager",
        "Full access to all premium features",
        "Enterprise-level security",
        "Customized analytics dashboards",
        "24/7 priority customer support",
      ],
      popular: false,
    },
  ];


  return (
    <div id="pricing" className="bg-gradient-to-b relative from-[#F4FFDF] to-white py-16 px-4 lg:px-32">
    
    {/* FOR RIGHT SIDE OF BG */}
    
     <Image
                src="/assets/images/bg.svg"
                alt="bg"
                width={110}
                height={110}
                className="absolute z-10 top-4 right-[25rem] opacity-40"
              />

    {/* FOR BOTTOM SIDE OF BG */}

<Image
                src="/assets/images/bg.svg"
                alt="bg"
                width={110}
                height={110}
                className="absolute z-10 bottom-56 left-64 opacity-40"
              />
    
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <p className="flex justify-center font-medium gap-2 mb-6">
            <IoPricetag className="text-xl text-[#A9ED42]" />
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-gray-700 max-w-2xl mb-12">
            We offer flexible pricing plans that align with where your business
            stands today and where it's headed.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white relative rounded-xl px-12 pt-4 pb-3 shadow-sm border border-gray-100 "
          >
            {plan.popular && (
              <div className="bg-gradient-to-r from-[#F1F7E6] to-[#B5EE5E] absolute -right-2 top-0 text-gray-900 text-sm font-medium rounded-bl-2xl rounded-tr-xl rounded-tl-none rounded-br-none  px-2.5 py-2 rounded mr-2 mb-2">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {plan.title}
            </h3>
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              {plan.price}
            </p>
            <p className="text-gray-600 text-sm mb-7">{plan.description}</p>
            <ul className="space-y-3.5 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="  mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r justify-center w-full from-gray-600 to-black flex gap-3 text-white px-5 py-3 rounded-md">
              <MdArrowOutward />
              Get Started
            </button>

            <p className="text-gray-500 italic text-center my-6">
              *No commitment – cancel anytime*
            </p>
          </div>
        ))}
      </div>

      <div className="px-3 lg:px-72 border border-transparent  text-center h-auto bg-gradient-to-r from-[#FEFFFB] via-[#F4FFDC] to-[#FEFFFB] mt-12 ">
        <div className="py-3 px-6  flex lg:flex-row flex-col gap-4 justify-between items-center text-gray-700">
          <div className="flex items-center">
            <FaShieldAlt className="mr-2" />
            <span>100% Safe Purchase</span>
          </div>
          <div className="flex items-center">
            <CiCircleCheck className="text-3xl font-semibold mr-2" />
            <span>7-Day Money Back Gurantee</span>
          </div>
          <div className="flex items-center">
            <RiShareForward2Line className="mr-2" />
            <span>Delivery In &lt;24h</span>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex  justify-center">
        <div className=" rounded-t-2xl bg-gradient-to-t from-[#F5FFE1] via-[#FFFFFF] to-[#FFFFFF] p-6 shadow-sm mt-12 border border-gray-100 max-w-2xl w-full">
          <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">
            Not sure if we’re a fit?
          </h3>
          <p className="text-gray-600 text-center text-sm mb-6">
            Let’s set up a 15 minute call to figure out if we can help you.
          </p>
          <button className="bg-[#EAF0DD] text-gray-900 font-semibold py-3 px-6 rounded-md flex items-center justify-center mx-auto">
          <PiCrown         className="text-2xl flex items-center mr-2" />
            Schedule A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
