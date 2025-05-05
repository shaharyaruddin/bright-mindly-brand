'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='flex justify-center py-5'>
      <div className="min-w-5xl flex flex-col bg-white border rounded-lg px-5 py-4 relative">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-semibold">
            <img src="/path-to-your-clover-icon.png" alt="Clover" className="w-6 h-6" />
            Clover
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-between w-full ml-10">
            <nav className="flex  justify-center items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-green-600">Product</a>
              <a href="#" className="hover:text-green-600">Reviews</a>
              <a href="#" className="hover:text-green-600">Benefits</a>
              <a href="#" className="hover:text-green-600">Pricing</a>
              <a href="#" className="hover:text-green-600">Changelog</a>
            </nav>
            <button className="bg-black text-white px-4 py-3 rounded-md flex items-center gap-2">
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
            <div className="flex flex-col items-start p-5 gap-4 text-sm font-medium">
              <a href="#" className="w-full">Product</a>
              <a href="#" className="w-full">Reviews</a>
              <a href="#" className="w-full">Benefits</a>
              <a href="#" className="w-full">Pricing</a>
              <a href="#" className="w-full">Changelog</a>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md">
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
