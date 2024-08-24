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
    <div className={`fixed top-0 left-0 w-screen z-50 transition-colors font-mono duration-300 py-2 lg:py-6 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white hover:text-black'}`}>
      <div className="container mx-auto space-x-2 lg:space-x-0 lg:px-10 py-2 flex flex-row items-center justify-center lg:justify-between">
        <div className="flex lg:space-x-4">
          <button className="bg-zinc-400 px-2 lg:px-4 lg:py-1 rounded-none  hover:text-black text-xs lg:text-base ">COUTURE</button>
          <button className="hover:bg-zinc-400 px-2 lg:px-4 lg:py-1 rounded-none  hover:text-black text-xs lg:text-base">DIFFUSE</button>
        </div>
        <h1 className="text-sm lg:text-3xl font-semibold">{isScrolled ? <img className='w-8 h-8 lg:w-16 lg:h-16' src=
        {logo} alt="" /> : 'DIAMOND BRIDAL'}</h1>
        <div className="flex items-center  space-x-2  lg:space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-28 h-4 lg:w-full lg:h-full border-0 focus:border-0 focus:outline-none bg-zinc-400 lg:px-4 py-1 rounded-none placeholder:pl-1 placeholder:text-white placeholder:text-xs lg:placeholder:text-base "
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-xs lg:text-xl" />
          </div>
          <FaUser className="text-xs lg:text-xl cursor-pointer" />
        </div>
      </div>
      <div>
        {!isScrolled && (
          <div className="py-2">
            <div className="container mx-auto px-4">
              <nav className="flex space-x-4 text-xs lg:text-lg lg:space-x-10 items-center justify-center">
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
