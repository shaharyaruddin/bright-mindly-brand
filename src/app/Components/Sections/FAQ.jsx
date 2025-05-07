'use client'
import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoClose, IoPricetag } from "react-icons/io5";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the platform ensure data accuracy?",
      answer: "Our system uses advanced AI verification and triple-checks every data point to guarantee accurate, ensuring reliable and verified information.",
    },
    {
      question: "Can I integrate this platform with other tools?",
      answer: "Absolutely! Our platform supports integrations with popular CRMs and business tools, allowing for seamless workflows",
    },
    {
      question: "How long does it take to get started?",
      answer: "Getting started is quick and easy. Most users can set up their account and begin using the platform within minutes.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via email and chat. Pro and Enterprise users also have access to priority support with dedicated assistance.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we use industry-standard encryption and follow strict security protocols to protect your data. Your information is never shared with third parties."
    }
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-[#F5FFE0] via-[#FAFFF1] to-[#FFFFFF   ] py-16  px-4 lg:px-32">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
        <div className="flex items-center justify-center">
  <div className="flex items-center justify-center gap-2 mb-6">
    <FaQuestion className="text-white text-2xl p-1.5 rounded-full bg-[#A9ED42]" />
    <span className="font-medium">FAQ'S</span>
  </div>
</div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got a quick question?
          </h2>

          <p className="text-gray-700 max-w-2xl mb-12">
            We're here to help you make the right decision. Explore our
            frequently asked questions and find answers below.
          </p>
        </div>
      </div>
      <div className="max-w-4xl bg-white p-4 md:p-10 mb-8 rounded-xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white shadoow-lg rounded-lg border border-gray-200">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className=" font-medium text-[#1D1F13]">{faq.question}</h3>
              <span className="text-xl font-bold">
                {expanded === index ? <IoClose /> : <IoMdAdd />                }
              </span>
            </div>
            {expanded === index && faq.answer && (
              <div className="text-sm max-w-2xl p-4 pt-0 text-[#1D1F13]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;