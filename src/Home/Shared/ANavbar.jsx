// Sidebar.jsx
import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-slate-900 text-white w-64 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <button className="text-white lg:hidden" onClick={toggleSidebar}>
          <FaTimes className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold mb-4">Admin</h1>
        <ul>
          <li><a href="/" className="block py-2 px-4">Home</a></li>
          <li><a href="/dashboard/offday" className="block py-2 px-4">Offday Manage</a></li>
          <li><a href="/dashboard/open-details" className="block py-2 px-4">Choice Date</a></li>
          {/* <li><a href="#" className="block py-2 px-4">Contact</a></li> */}
        </ul>
      </div>

      {/* Fab for small screens */}
      <div className="lg:hidden fixed bottom-4 right-4">
        <button onClick={toggleSidebar} className="bg-yellow-600 text-white p-3 rounded-full shadow-lg">
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar backdrop for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
