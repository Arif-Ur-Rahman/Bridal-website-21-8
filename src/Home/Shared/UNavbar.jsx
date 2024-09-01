import React, { useState, useEffect, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import logo from "../../assets/logo-2.png";
import AppointmentForm from "../Button/Appoinment"; // Ensure the path is correct
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div className={`fixed top-0 left-0 w-screen z-50 transition-colors font-mono duration-300 py-2 lg:py-6 ${isScrolled ? 'bg-white text-black' : 'bg-slate-900 text-white hover:bg-white hover:text-black'}`}>
      <div className="container mx-auto space-x-2 lg:space-x-0 lg:px-10 py-2 flex flex-row items-center justify-center lg:justify-between">
        <div className="flex lg:space-x-4">
          
          {user ? (
            <>
              {/* <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="User" /> */}
              <span >{user.displayName}</span>
              <a onClick={handleLogOut} className="bg-zinc-400 px-2 lg:px-4 lg:py-1 rounded-none hover:text-black text-xs lg:text-base ">SignOut</a>
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
          <div className="">
            <button 
              className="btn p-5 bg-yellow-600 border-none text-white font-semibold rounded-none hover:bg-green-700 transition duration-300"
              onClick={handleOpenModal}
            >
              Appointment
            </button>
          </div>
          
        </div>
      </div>
      <AppointmentForm isOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      <div className='text-center'>
        {!isScrolled && (
          <div className="py-2">
            <div className="container mx-auto px-4">
              <nav className="flex space-x-4 text-xs lg:text-lg lg:space-x-10 items-center justify-center">
                <a href="/" className="hover:text-black">Home</a>
                <a href="" className="hover:text-black">My Appointment</a>
                <a href="/dashboard/userpage" className="hover:text-black">Blog</a>
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

export default UNavbar;
