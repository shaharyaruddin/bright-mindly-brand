import React from "react";
import { IoPricetag } from "react-icons/io5";
import { FaStar, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const reviewData = [
    {
      quote: "A fantastic tool! It saved us time and money beyond expectations.",
      name: "Brendan",
      title: "owner of Goog",
      icon: <FaTwitter className="text-gray-500" />,
    },
    {
      quote:
        "Simply exceptional! The platform is fast, efficient, and offers all the essential tools we need to optimize our processes effortlessly.",
      name: "jacychan",
      title: "owner of Breit",
      icon: <FaInstagram className="text-gray-500" />,
    },
    {
      quote: "Great experience! The insights provided are incredibly helpful.",
      name: "gaat",
      title: "owner of Pidio",
      icon: <FaLinkedin className="text-gray-500" />,
    },
    {
      quote: "An absolute must-have! The intuitive features, real-time insights, and seamless performance have greatly improved our operations.",
      name: "Wilson",
      title: "owner of Talik",
      icon: <FaFacebook className="text-gray-500" />,
    },
    {
      quote: "An amazing platform! It streamlined our workflow and boosted productivity effortlessly.",
      name: "jamesli",
      title: "owner of Candto",
      icon: <FaTwitter className="text-gray-500" />,
    },
    {
      quote: "A true game-changer! This platform offers powerful features, seamless integration, and user-friendly design that streamlines our workflow.",
      name: "anna",
      title: "owner of Hanko",
      icon: <FaInstagram className="text-gray-500" />,
    },
    {
      quote: "Incredible tool! It helped us save time and resources while improving efficiency.",
      name: "maya",
      title: "owner of Janlo",
      icon: <FaFacebook className="text-gray-500" />,
    },
    {
      quote: "A true game-changer! This platform offers powerful features, seamless integration, and user-friendly design that streamlines our workflow.",
      name: "janney",
      title: "owner of Goyu",
      icon: <FaFacebook className="text-gray-500" />,
    },
    {
      quote: "Outstanding tool! It’s intuitive and highly effective.",
      name: "shallot",
      title: "owner of Tanko",
      icon: <FaLinkedin className="text-gray-500" />,
    },
  ];

  return (
    <div className="bg-gradient-to-t from-white via-[#FAFFF1] to-[#F4FFDF] py-16 px-4 lg:px-32">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <p className="flex justify-center font-medium gap-2 mb-6">
            <IoPricetag className="text-xl text-[#A9ED42]" />
            REVIEWS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Valued Clients
          </h2>
          <p className="text-gray-700 max-w-2xl mb-12">
            We're here to help you make the right decision. Explore our
            frequently asked questions and find answers below.
          </p>
        </div>
      </div>
      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewData.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start mb-auto relative "
          >
            <div className="flex gap-2 text-yellow-400 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-700 mb-6 italic">{`"${review.quote}"`}</p>
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-600 text-sm">{review.title}</p>
              </div>
            </div>
            <div className="absolute top-6 text-2xl right-6">{review.icon}</div>
          </div>
        ))}
      </div>

<div className="mt-12 flex text-sm font-medium justify-center">
    <p>CLIENTS USING GREENCLOVER


</p>


</div>


<div className="flex gap-8 mt-8 ">
            <Marquee play direction="right" speed={50}>
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

    </div>
  );
};

export default Reviews;
