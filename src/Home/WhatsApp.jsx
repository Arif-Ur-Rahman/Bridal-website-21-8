import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/your-number" // Replace 'your-number' with your WhatsApp number
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-400 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
