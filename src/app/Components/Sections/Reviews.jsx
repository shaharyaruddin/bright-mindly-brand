'use client'
import React from "react";
import { IoPricetag } from "react-icons/io5";
import { FaStar, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const clientImages = [
  '/assets/images/client1.png',
  '/assets/images/client2.png',
  '/assets/images/client3.png',
  '/assets/images/client4.png',
  '/assets/images/client5.png',
  '/assets/images/client6.png',
  '/assets/images/client7.png',
  '/assets/images/client8.png'
];

const reviewImages = [
  '/assets/images/review1.jpg',
  '/assets/images/review2.jpg',
  '/assets/images/review3.jpg',
  '/assets/images/review4.jpg',
  '/assets/images/review5.jpg',
  '/assets/images/review6.jpg',
  '/assets/images/review7.jpg',
  '/assets/images/review8.jpg',
  '/assets/images/review9.png'
];

const Reviews = () => {
  const headingText = "Our Esteemed Learners".split(" ");
  const content =
    "Hear from our students and partners about how our academy has transformed their learning journey.".split(
      " "
    );

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

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const reviewData = [
    {
      quote: "This academy transformed my career with its top-notch courses!",
      name: "Sarah",
      title: "Student at LearnHub",
      icon: <FaTwitter className="text-gray-500" />,
      image: reviewImages[0]
    },
    {
      quote: "The personalized learning paths made studying so effective and enjoyable!",
      name: "Michael",
      title: "Professional Learner",
      icon: <FaInstagram className="text-gray-500" />,
      image: reviewImages[1]
    },
    {
      quote: "The mentors are incredible, providing insights that truly matter.",
      name: "Emily",
      title: "Career Switcher",
      icon: <FaLinkedin className="text-gray-500" />,
      image: reviewImages[2]
    },
    {
      quote: "A fantastic platform! The resources are accessible and comprehensive.",
      name: "David",
      title: "Freelancer",
      icon: <FaFacebook className="text-gray-500" />,
      image: reviewImages[3]
    },
    {
      quote: "The courses are engaging and helped me gain recognized certifications!",
      name: "Lisa",
      title: "Aspiring Developer",
      icon: <FaTwitter className="text-gray-500" />,
      image: reviewImages[4]
    },
    {
      quote: "An exceptional learning experience with real-world applications.",
      name: "James",
      title: "Entrepreneur",
      icon: <FaInstagram className="text-gray-500" />,
      image: reviewImages[5]
    },
    {
      quote: "The support team is always there, making learning seamless.",
      name: "Sophie",
      title: "Part-Time Student",
      icon: <FaFacebook className="text-gray-500" />,
      image: reviewImages[6]
    },
    {
      quote: "This platform boosted my skills and confidence significantly!",
      name: "Mark",
      title: "Tech Enthusiast",
      icon: <FaFacebook className="text-gray-500" />,
      image: reviewImages[7]
    },
    {
      quote: "Highly recommend! The content is intuitive and practical.",
      name: "Anna",
      title: "Lifelong Learner",
      icon: <FaLinkedin className="text-gray-500" />,
      image: reviewImages[8]
    },
  ];

  return (
    <div id="testimonials" className="bg-gradient-to-t relative from-white via-[#E3F2FD] to-[#E1F5FE] py-16 px-4 lg:px-32">
      <Image
        src="/assets/images/bg.svg"
        alt="background pattern"
        width={120}
        height={120}
        className="lg:block hidden absolute z-10 top-12 right-52 lg:right-[20rem] opacity-30 filter-blue"
      />
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="text-center">
          <p className="flex justify-center font-medium gap-2 mb-6">
            <IoPricetag className="text-xl text-[#0288D1]" />
            TESTIMONIALS
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
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {reviewData.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-start mb-auto relative"
            variants={index % 3 === 1 ? cardVariantsLeft : cardVariantsRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                <Image
                  src={review.image}
                  width={40}
                  height={40}
                  alt={`${review.name}'s testimonial`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-600 text-sm">{review.title}</p>
              </div>
            </div>
            <div className="absolute top-6 text-2xl right-6">{review.icon}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex text-sm font-medium justify-center">
        <p>PARTNERS & INSTITUTIONS</p>
      </div>
      <div className="mt-8">
        <Marquee play direction="right" speed={50}>
          <div className="flex gap-8">
            {clientImages.map((client, index) => (
              <div
                key={index}
                className="w-32 h-32 rounded-full overflow-hidden flex gap-12 items-center justify-center"
              >
                <Image
                  src={client}
                  width={115}
                  height={115}
                  alt={`Partner ${index + 1}`}
                  className="object-contain filter brightness-50"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;