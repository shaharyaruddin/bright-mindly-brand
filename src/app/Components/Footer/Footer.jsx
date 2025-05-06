import React from 'react';
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-green-600 text-xl">☘</span>
            <span className="text-black font-semibold text-lg">Clover</span>
          </div>

          {/* Navigation under logo */}
          <nav className="flex text-sm gap-6 text-gray-500 mb-4">
            <a href="#" className="hover:text-black">Product</a>
            <a href="#" className="hover:text-black">Benefits</a>
            <a href="#" className="hover:text-black">Reviews</a>
            <a href="#" className="hover:text-black">Pricing</a>
          </nav>
        </div>

        <div className="flex gap-4 text-sm text-gray-500 items-center">
          <a href="#"><FaInstagram className="hover:text-black" size={18} /></a>
          <a href="#"><FaTiktok className="hover:text-black" size={18} /></a>
          <a href="#"><FaLinkedin className="hover:text-black" size={18} /></a>
          <a href="#"><FaYoutube className="hover:text-black" size={18} /></a>
          <a href="#"><FaTwitter className="hover:text-black" size={18} /></a>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="my-6 border-gray-200 border-1 mx-0 lg:mx-28" />

      {/* Bottom: Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm pb-12 text-gray-900">
        <p>© 2024 Clover Template</p>
        <p>
          Made by <a href="#" className="underline">Framebase</a>  | 
          Built in <a href="#" className="underline">Framer</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;