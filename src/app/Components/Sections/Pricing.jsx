"use client";
import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";  // Changed icon
import { MdArrowForward } from "react-icons/md";  // Changed icon
import { FaLock } from "react-icons/fa";  // Changed icon
import { RiExchangeBoxLine } from "react-icons/ri";  // Changed icon
import { PiTrophy } from "react-icons/pi";  // Changed icon
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  const headingText = "Choose the Ideal Plan".split(" "); // Updated heading
  const content =
    "We provide flexible pricing options to match your business needs and growth stage.".split(" "); // Updated content

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



  const plans = [
    {
      title: "Basic Plan",
      price: "$49/month",  // Updated price
      description:
        "Great for startups and individuals aiming to optimize their basic operations.",
      features: [
        "AI-driven cost-cutting features",
        "Basic analytics insights",
        "Email-only customer support",
        "Standard reporting tools",
        "No long-term contracts",
      ],
      popular: false,
    },
    {
      title: "Advanced Plan",
      price: "$149/month",  // Updated price
      description:
        "Tailored for growing teams needing more advanced features for scalability.",
      features: [
        "Advanced AI tools",
        "Detailed analytics reports",
        "Priority support via email",
        "Customizable plan options",
        "Team access functionality",
      ],
      popular: true,
    },
    {
      title: "Ultimate Plan",
      price: "$399/month",  // Updated price
      description:
        "Designed for large businesses that require personalized solutions and premium support.",
      features: [
        "Customized enterprise solutions",
        "Dedicated account manager",
        "Full access to premium features",
        "High-level security protocols",
        "24/7 personalized customer support",
      ],
      popular: false,
    },
  ];

  return (
    <div
      id="features"
      className="bg-gradient-to-b relative from-[#E6F0FF] to-white py-16 px-4 lg:px-32"  // Updated theme color
    >
      <Image
        src="/assets/images/bg.svg"
        alt="bg"
        width={110}
        height={110}
        className="absolute z-10 top-4 right-[25rem] opacity-40 filter-blue"
      />
      <Image
        src="/assets/images/bg.svg"
        alt="bg"
        width={110}
        height={110}
        className="absolute z-10 bottom-56 left-54 opacity-40 filter-blue"
      />

      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <p className="flex justify-center font-medium gap-2 mb-6">
            <IoStar className="text-xl text-[#00BCD4]" /> {/* Updated icon */}
            PRICING
          </p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
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
          <motion.p
            className="text-gray-700 max-w-2xl mb-12"
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white relative rounded-xl px-12 pt-4 pb-3 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {plan.popular && (
              <div className="bg-gradient-to-r from-[#F1F7E6] to-[#B5EE5E] absolute -right-2 top-0 text-gray-900 text-sm font-medium rounded-bl-2xl rounded-tr-xl rounded-tl-none rounded-br-none px-2.5 py-2 rounded mr-2 mb-2">
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
                  <span className="mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href='get-started'>
            <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B] justify-center w-full  flex gap-3 text-white px-5 py-3 rounded-md">
              <MdArrowForward /> {/* Updated icon */}
              Get Started 
            </button>
            </Link>
            <p className="text-gray-500 italic text-center my-6">
              *No commitment – cancel anytime*
            </p>
          </motion.div>
        ))}
      </div>

      <div className="px-3 lg:px-72 border border-transparent text-center h-auto bg-gradient-to-r from-[#FEFFFB] via-[#E6F0FF] to-[#FEFFFB] mt-12">
        <div className="py-3 px-6 flex lg:flex-row flex-col gap-4 justify-between items-center text-gray-700">
          <div className="flex items-center">
            <FaLock className="mr-2" /> {/* Updated icon */}
            <span>100% Safe Purchase</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-3xl font-semibold mr-2" /> {/* Updated icon */}
            <span>7-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center">
            <RiExchangeBoxLine className="mr-2" /> {/* Updated icon */}
            <span>Delivery In &lt;24h</span>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <motion.div className="flex justify-center"
       initial={{opacity: 0, y:50}}
       whileInView={{opacity: 1, y:0}}
       transition={{delay: 1, duration: 0.8}}
       viewport={{once: true, amount: 0.2}} >
      
        <div className="rounded-t-2xl bg-gradient-to-t from-[#E6F0FF] via-[#F0F6FF] to-[#FFFFFF] p-6 shadow-sm mt-12 border border-gray-100 max-w-2xl w-full">
          <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">
            Not sure if we’re a fit?
          </h3>
          <p className="text-gray-600 text-center text-sm mb-6">
            Let’s set up a 15 minute call to figure out if we can help you.
          </p>
          <button className="bg-[#F0F6FF] shaodow-lg border border-[#E6F0FF] cursor-pointer text-gray-900 font-semibold py-3 px-6 rounded-md flex items-center justify-center mx-auto">
            <PiTrophy className="text-2xl flex items-center mr-2" /> {/* Updated icon */}
            Schedule A Call
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
