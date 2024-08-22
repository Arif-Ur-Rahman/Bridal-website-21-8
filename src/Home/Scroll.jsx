import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-5 bg-[#EDB354] text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#EDB354] transition duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Scroll;
