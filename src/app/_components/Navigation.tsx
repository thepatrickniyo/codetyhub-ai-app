"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container mx-auto px-4 py-2 sticky top-0 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
      <nav className="flex justify-between items-center">
        <label className='relative'>
          <Image src="/assets/logo-1.svg" alt="CodeWay Academy" width={80} draggable={false} height={30}  />
          <label className='absolute left-11 top-12 text-xs text-white'>Codeway Academy</label>
        </label>
        {/* Menu icon for mobile */}
        <div className="block lg:hidden">
          <button
            // onClick={toggleMenu}
            className="text-white hover:text-teal-200 transition focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Navigation links for larger screens */}
        <ul className="hidden lg:flex space-x-6">
          <li><a href="#" className="text-white hover:text-teal-200 transition">Courses</a></li>
          <li><a href="#" className="text-white hover:text-teal-200 transition">Paths</a></li>
          <li><a href="#" className="text-white hover:text-teal-200 transition">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-teal-200 transition">For Teams</a></li>
        </ul>
      </nav>

      {/* Fullscreen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 lg:hidden">
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Menu items */}
          <ul className="space-y-8 text-center">
            <li><a href="#" className="text-white text-xl hover:text-teal-200 transition">Courses</a></li>
            <li><a href="#" className="text-white text-xl hover:text-teal-200 transition">Paths</a></li>
            <li><a href="#" className="text-white text-xl hover:text-teal-200 transition">Pricing</a></li>
            <li><a href="#" className="text-white text-xl hover:text-teal-200 transition">For Teams</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
