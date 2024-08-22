// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import logo from "../../assets/logo-2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors font-mono duration-300 py-6 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white hover:text-black'}`}>
      <div className="container mx-auto px-10 py-2 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4">
          <button className="bg-zinc-400 px-2 lg:px-4 py-1 rounded-none  hover:text-black text-sm lg:text-base ">COUTURE</button>
          <button className="hover:bg-zinc-400 px-2 lg:px-4 py-1 rounded-none  hover:text-black text-sm lg:text-base">DIFFUSE</button>
        </div>
        <h1 className="text-base lg:text-3xl font-semibold">{isScrolled ? <img className='w-8 h-8 lg:w-16 lg:h-16' src=
        {logo} alt="" /> : 'DIAMOND BRIDAL'}</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border-0 focus:border-0 focus:outline-none bg-zinc-400 px-1 lg:px-4 py-1 rounded-none placeholder:text-white placeholder:text-base "
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaUser className="text-xl cursor-pointer" />
        </div>
      </div>
      <div>
        {!isScrolled && (
          <div className="py-2">
            <div className="container mx-auto px-4">
              <nav className="flex space-x-10 items-center justify-center">
                <a href="#" className="hover:text-black">Home</a>
                <a href="#" className="hover:text-black">About</a>
                <a href="#" className="hover:text-black">Shop</a>
                <a href="#" className="hover:text-black">Category</a>
                <a href="#" className="hover:text-black">Contuct</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
