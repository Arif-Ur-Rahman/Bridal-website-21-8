import React from 'react';
import { FaCheck } from 'react-icons/fa';
import m6 from "../assets/img/b6.jpg"
import m1 from "../assets/img/about-1.jpg"
 
import Footer from '../Home/Shared/Footer';
import Navbar from '../Home/Shared/SubNavbar';

const AboutSection = () => {
  return (
    <>
  <Navbar></Navbar>
    
    <div className="bg-yellow-50">
    <div className="container mx-auto py-10 px-10 mt-36 min-h-screen">
      <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="relative h-full">
                <div className="flex flex-wrap relative z-10">
                    <div className="w-1/2 p-3">
                        <img className="  p-3 relative z-10  " src={m6} alt="" />
                    </div>
                    <div className="w-1/2 p-3 self-end ">
                        <img className="   p-3 relative z-10 " src={m1} alt="" />
                    </div>
                </div>
                <div className="absolute top-10 left-1/4 w-3/5 h-4/5 border-8 border-yellow-50 z-0"></div>
            </div>
            </div>

        <div className="w-full lg:w-1/2 px-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="h-full">
            <h1 className="text-4xl font-bold mb-6">We Are Creative And Professional Bridal</h1>
            <p className="mb-4 text-slate-500">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p className="mb-6 text-slate-500">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-1/2 px-2">
                <div className="flex items-center">
                  <FaCheck className=" mr-2 text-yellow-600" />
                  <span className='text-slate-500'>Quality Products</span>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="flex items-center">
                  <FaCheck className= "mr-2 text-yellow-600" />
                  <span className='text-slate-500'>Custom Products</span>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="flex items-center">
                  <FaCheck className=" mr-2 text-yellow-600" />
                  <span className='text-slate-500'>Online Order</span>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="flex items-center">
                  <FaCheck className=" mr-2 text-yellow-600" />
                  <span className='text-slate-500'>Home Delivery</span>
                </div>
              </div>
            </div>
            <a className="btn bg-yellow-600 text-white py-3 px-5 inline-block" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AboutSection;
