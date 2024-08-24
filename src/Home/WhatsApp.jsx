import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      className="fixed bottom-5 right-8 lg:right-7  bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-400 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsApp;
