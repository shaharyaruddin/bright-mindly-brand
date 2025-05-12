'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="sticky top-0 left-0 bg-gradient-to-r from-white via-[#E9F4FF] to-white w-full z-50">
      <div className="flex justify-center py-4 sm:py-5">
        <div className="w-full lg:max-w-5xl flex flex-col bg-white border border-[#E3F2FD] rounded-lg px-4  py-3 sm:py-4 relative mx-4  lg:mx-auto shadow-md">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 text-base sm:text-lg font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                width={24}
                height={24}
                alt="logo"
                src="/assets/images/book.svg"
                className="filter-blue"
              />
              BrightMindly
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center justify-center flex-1"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <nav className="flex justify-center items-center gap-2 lg:gap-8 text-sm font-medium">
                <motion.a
                  href="#home"
                  onClick={(e) => handleScroll(e, "#home")}
                  className="hover:bg-[#E1F5FE] p-1.5 hover:px-3 rounded-full cursor-pointer text-gray-700 hover:text-[#0288D1]"
                  variants={navItemVariants}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#comparison"
                  onClick={(e) => handleScroll(e, "#comparison")}
                  className="hover:bg-[#E1F5FE] p-1.5 px-3 rounded-full cursor-pointer text-gray-700 hover:text-[#0288D1]"
                  variants={navItemVariants}
                >
                  Comparison
                </motion.a>
                <motion.a
                  href="#features"
                  onClick={(e) => handleScroll(e, "#features")}
                  className="hover:bg-[#E1F5FE] p-1.5 px-3 rounded-full cursor-pointer text-gray-700 hover:text-[#0288D1]"
                  variants={navItemVariants}
                >
                  Features
                </motion.a>
                <motion.a
                  href="#testimonials"
                  onClick={(e) => handleScroll(e, "#testimonials")}
                  className="hover:bg-[#E1F5FE] p-1.5 px-3 rounded-full cursor-pointer text-gray-700 hover:text-[#0288D1]"
                  variants={navItemVariants}
                >
                  Testimonials
                </motion.a>
                <motion.a
                  href="#faq"
                  onClick={(e) => handleScroll(e, "#faq")}
                  className="hover:bg-[#E1F5FE] p-1.5 px-3 rounded-full cursor-pointer text-gray-700 hover:text-[#0288D1]"
                  variants={navItemVariants}
                >
                  FAQ
                </motion.a>
              </nav>
            </motion.div>

            {/* Desktop Button */}
            <motion.div
              className="hidden md:flex"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href='/Enroll-now'>
              <button className="bg-gradient-to-r cursor-pointer from-[#0288D1] to-[#01579B]   text-white px-3 py-3 sm:px-7 sm:py-3.5 rounded-lg flex items-center gap-2 hover:bg-[#01579B] transition-colors">
                📘 Enroll Now
              </button>
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              className="absolute top-full mt-2 left-0 w-full bg-white border-t md:hidden z-50 rounded-b-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-start p-4 sm:p-5 gap-3 sm:gap-4 text-sm font-medium">
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, "#home")}
                  className="w-full text-gray-700 hover:text-[#0288D1]"
                >
                  Home
                </a>
                <a
                  href="#comparison"
                  onClick={(e) => handleScroll(e, "#comparison")}
                  className="w-full text-gray-700 hover:text-[#0288D1]"
                >
                  Comparison
                </a>
                <a
                  href="#features"
                  onClick={(e) => handleScroll(e, "#features")}
                  className="w-full text-gray-700 hover:text-[#0288D1]"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScroll(e, "#testimonials")}
                  className="w-full text-gray-700 hover:text-[#0288D1]"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  onClick={(e) => handleScroll(e, "#faq")}
                  className="w-full text-gray-700 hover:text-[#0288D1]"
                >
                  FAQ
                </a>
                <Link href='/Enroll-now'>
                <button className="w-full bg-[#0288D1] text-white px-4 py-2 rounded-md text-sm hover:bg-[#01579B] transition-colors">
                  📘 Enroll Now
                </button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;