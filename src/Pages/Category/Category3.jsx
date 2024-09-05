import Navbar from '../../Home/Shared/NavbarNew';
import Footer from '../../Home/Shared/Footer';
import React, { useState } from 'react';
import { Lightbox } from 'react-modal-image';
import a from "../../assets/img/o1.jpg";
import b from "../../assets/img/o2.jpg";
import c from "../../assets/img/o3.jpg";
import d from "../../assets/img/o4.jpeg";
import e from "../../assets/img/o5.jpg";
 
 

const Category3 = () => {
    
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  }; 
  return (
    <>
    <Navbar></Navbar>
    <div className="mt-36 ">
    <section className="relative pt-16 pb-32 px-4 mb-8 bg-[#FDF5EB] font-mono mt-5 min-h-screen">
      <h1 className='text-center text-3xl mb-20'>Ornaments Collections</h1>
      <div className="container mx-auto relative mt-4">
        <div className="relative">
          {/* Card Container */}
          <div className="lg:flex justify-center items-end relative space-x-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center translate-y-12">
              <div 
                className="card bg-base-100 w-48 h-72 shadow-xl flex flex-col z-10 rounded-none transform transition-transform duration-300 hover:scale-110 hover:opacity-50"
                onClick={() => handleImageClick(a)}
              >
                <figure className="relative h-full overflow-hidden">
                  <img src={a} alt="Card 1" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="lg:mt-2 mb-14 lg:mb-0 text-center">
                <div className="rating rating-md">
                  {/* Rating Stars */}
                </div>
                <p>Wedding </p>
                <p className='font-bold text-red-600'>Morning Wedding </p>
              </div>
            </div>

            {/* Other cards (similar to Card 1) */}
            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <div 
                className="card bg-base-100 w-52 h-80  mt-6 lg:mt-0 shadow-xl flex flex-col z-20 rounded-none transform transition-transform duration-300 hover:scale-110 hover:opacity-50"
                onClick={() => handleImageClick(b)}
              >
                <figure className="relative h-full overflow-hidden">
                  <img src={b} alt="Card 2" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="lg:mt-2 mb-14 lg:mb-0 text-center">
                <div className="rating rating-md">
                  {/* Rating Stars */}
                </div>
                <p>Stylish </p>
                <p className='font-bold text-red-600'>Elegant Summer </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center -translate-y-12">
              <div 
                className="card bg-base-100 w-60 h-96  mt-6 lg:mt-0  shadow-mt-6xl flex flex-col z-30 rounded-none transform transition-transform duration-300 hover:scale-110 hover:opacity-50"
                onClick={() => handleImageClick(c)}
              >
                <figure className="relative h-full overflow-hidden">
                  <img src={c} alt="Card 3" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  {/* Rating Stars */}
                </div>
                <p>Wedding </p>
                <p className='font-bold text-red-600'>Night Wedding </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <div 
                className="card bg-base-100 w-52 h-80 shadow-xl flex flex-col z-20 rounded-none transform transition-transform duration-300 hover:scale-110 hover:opacity-50"
                onClick={() => handleImageClick(d)}
              >
                <figure className="relative h-full overflow-hidden">
                  <img src={d} alt="Card 4" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  {/* Rating Stars */}
                </div>
                <p>Chic </p>
                <p className='font-bold text-red-600'>Elegant Evening </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center translate-y-12">
              <div 
                className="card bg-base-100 w-48 max-h-72 shadow-xl flex flex-col z-10 rounded-none transform transition-transform duration-300 hover:scale-110 hover:opacity-50"
                onClick={() => handleImageClick(e)}
              >
                <figure className="relative h-full overflow-hidden">
                  <img src={e} alt="Card 5" className="w-full h-full object-cover"/>
                </figure>
              </div>
              <div className="mt-2 text-center">
                <div className="rating rating-md">
                  {/* Rating Stars */}
                </div>
                <p>Classic </p>
                <p className='font-bold text-red-600'>Timeless Classic </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          medium={selectedImage}
          large={selectedImage}
          alt="Selected"
          onClose={handleCloseLightbox}
        />
      )}
    </section>
 

            <Footer></Footer>
        </div>
        </>
    );
};

export default Category3;