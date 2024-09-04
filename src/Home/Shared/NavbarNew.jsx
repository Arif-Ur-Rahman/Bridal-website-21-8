import React, { useState, useEffect, useContext } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import logo from "../../assets/logo-2.png";
import AppointmentForm from "../Button/Appoinment"; // Ensure the path is correct
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout Successfully");
        navigate('/');
      })
      .catch(() => {
        toast("Logout Error");
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-screen z-50 transition-colors font-mono duration-300 py-2 lg:py-6 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white hover:text-black'}`}>
      <div className="container mx-auto  space-x-1 lg:space-x-0 lg:px-10 py-2 flex flex-row items-center justify-around lg:justify-between">
        <div className="flex lg:space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-1 lg:space-x-4">
              <span className='text-xs lg:text-base'>{user.displayName}</span>
              <a onClick={handleLogOut} className="bg-zinc-400 px-2 lg:px-4 lg:py-1 rounded-none hover:text-black text-xs lg:text-base">SignOut</a>
              </div>
            </>
          ) : (
            <Link to='/login' className="">
              <FaUser className="text-xs lg:text-xl cursor-pointer" />
            </Link>
          )}
        </div>
        <h1 className="text-sm lg:text-3xl font-semibold">
          {isScrolled ? <img className='w-8 h-8 lg:w-16 lg:h-16' src={logo} alt="Logo" /> : 'DIAMOND BRIDAL'}
        </h1>
        <div className="flex items-center space-x-2 lg:space-x-4">
           {/* Appointment Button here */}
           <div className="lg:block">
            <button
              className="btn p-1 lg:p-5 bg-yellow-600 border-none text-white font-semibold rounded-none hover:bg-green-700 transition duration-300"
              onClick={handleOpenModal}
            >
              Appointment
            </button>
          </div>
    
          {/* Mobile Menu Icon */}
          <button className="lg:hidden text-sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars />
          </button>
       
        </div>
      </div>
      <AppointmentForm isOpen={isModalOpen} handleCloseModal={handleCloseModal} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white absolute w-full top-full left-0 z-50">
          <a href="/" className="block py-2 px-4 hover:bg-gray-700">Home</a>
          <a href="/about" className="block py-2 px-4 hover:bg-gray-700">About</a>
          <a href="/Service" className="block py-2 px-4 hover:bg-gray-700">Service</a>
          
          {/* Shop Dropdown */}
          <div className="relative">
            <a 
              href="#"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
            >
              Shop
            </a>
            {isShopDropdownOpen && (
              <div className="bg-gray-700 text-white rounded-md shadow-lg">
                <a href="/shop1" className="block px-4 py-2 hover:bg-gray-600">Shop-1</a>
                <a href="/shop2" className="block px-4 py-2 hover:bg-gray-600">Shop-2</a>
              </div>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <a 
              href="#"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              Category
            </a>
            {isCategoryDropdownOpen && (
              <div className="bg-gray-700 text-white rounded-md shadow-lg">
                <a href="/cat1" className="block px-4 py-2 hover:bg-gray-600">Grooms</a>
                <a href="/cat2" className="block px-4 py-2 hover:bg-gray-600">Bride</a>
                <a href="/cat3" className="block px-4 py-2 hover:bg-gray-600">Ornaments</a>
              </div>
            )}
          </div>

          <a href="/contact" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
        </div>
      )}


      {/* Desktop Menu */}
      <div className='hidden lg:block text-center'>
        {!isScrolled && (
          <div className="py-2">
            <div className="container mx-auto px-4">
              <nav className="flex space-x-4 text-xs lg:text-lg lg:space-x-10 items-center justify-center">
                <a href="/" className="hover:text-black">Home</a>
                <a href="/about" className="hover:text-black">About</a>
                <a href="/Service" className="hover:text-black">Service</a>

                {/* Shop Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsShopDropdownOpen(true)}
                  onMouseLeave={() => setIsShopDropdownOpen(false)}
                >
                  <a href="" className="hover:text-black">Shop</a>
                  {isShopDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                      <a href="/shop1" className="block px-4 py-2 hover:bg-gray-200">Shop-1</a>
                      <a href="/shop2" className="block px-4 py-2 hover:bg-gray-200">Shop-2</a>
                    </div>
                  )}
                </div>

                {/* Category Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                  onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                >
                  <a href="" className="hover:text-black">Category</a>
                  {isCategoryDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                      <a href="/cat1" className="block px-4 py-1 hover:bg-gray-200">Grooms</a>
                      <a href="/cat2" className="block px-4 py-1 hover:bg-gray-200">Bride</a>
                      <a href="/cat3" className="block px-4 py-1 hover:bg-gray-200">Ornaments</a>
                    </div>
                  )}
                </div>

                <a href="/contact" className="hover:text-black">Contact</a>
              </nav>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
