'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex justify-center py-4 sm:py-5">
      <div className="w-full max-w-6xl flex flex-col bg-white border rounded-lg px-4 sm:px-6 py-3 sm:py-4 relative mx-4 sm:mx-6 lg:mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
            <img src="/path-to-your-clover-icon.png" alt="Clover" className="w-5 h-5 sm:w-6 sm:h-6" />
            Clover
          </div>

          <div className="hidden md:flex items-center justify-between w-full ml-6 lg:ml-10">
            <nav className="flex justify-center items-center gap-4 lg:gap-8 text-xs sm:text-sm font-medium">
              <a href="#" className="hover:text-green-600">Product</a>
              <a href="#" className="hover:text-green-600">Reviews</a>
              <a href="#" className="hover:text-green-600">Benefits</a>
              <a href="#" className="hover:text-green-600">Pricing</a>
              <a href="#" className="hover:text-green-600">Changelog</a>
            </nav>
            <button className="bg-black text-white px-3 py-2 sm:px-4 sm:py-3 rounded-md flex items-center gap-2 text-sm">
              ✨ Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white border-t md:hidden z-50 rounded-b-lg">
            <div className="flex flex-col items-start p-4 sm:p-5 gap-3 sm:gap-4 text-sm font-medium">
              <a href="#" className="w-full">Product</a>
              <a href="#" className="w-full">Reviews</a>
              <a href="#" className="w-full">Benefits</a>
              <a href="#" className="w-full">Pricing</a>
              <a href="#" className="w-full">Changelog</a>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md text-sm">
                ✨ Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;