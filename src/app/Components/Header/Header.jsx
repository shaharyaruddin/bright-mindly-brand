'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
<div className="fixed top-0 left-0 w-full z-50">
    <div className=" flex justify-center py-4 sm:py-5">
      <div className="w-full max-w-5xl flex flex-col bg-white border border-[#F5F8EF] rounded-lg px-4 sm:px-6 py-3 sm:py-4 relative mx-4 sm:mx-6 lg:mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
            <span className="text-green-600 text-xl">🍀</span>
            Clover
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <nav className="flex justify-center items-center gap-4 lg:gap-8 text-sm font-medium">
              <a href="#" className="hover:text-green-600">Product</a>
              <a href="#" className="hover:text-green-600">Reviews</a>
              <a href="#" className="hover:text-green-600">Benefits</a>
              <a href="#" className="hover:text-green-600">Pricing</a>
              <a href="#" className="hover:text-green-600">Changelog</a>
            </nav>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="bg-black text-white px-3 py-3 sm:px-7 sm:py-3.5 rounded-lg flex items-center gap-2">
              ✨ Get Clover
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white border-t md:hidden z-50 rounded-b-lg">
            <div className="flex flex-col items-start p-4 sm:p-5 gap-3 sm:gap-4 text-sm font-medium">
              <a href="#" className="w-full">Product</a>
              <a href="#" className="w-full">Reviews</a>
              <a href="#" className="w-full">Benefits</a>
              <a href="#" className="w-full">Pricing</a>
              <a href="#" className="w-full">Changelog</a>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md text-sm">
                ✨ Get Clover
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Header;