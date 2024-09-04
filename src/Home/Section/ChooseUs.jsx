import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../../assets/img/hero-1.jpg';
import hero2 from '../../assets/img/hero-2.jpg';
import hero3 from '../../assets/img/hero-3.jpg';
import hero4 from '../../assets/img/hero-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faTag, faTools } from '@fortawesome/free-solid-svg-icons';

const ChooseUs = () => {
  return (
    <section className='bg-[#FDF5EB] font-mono my-5 w-full h-full'>
      <div className="container-fluid bg-light py-5 mb-5 mx-auto">
        <div className="text-center mx-auto mb-5 max-w-lg">
          <p className="text-[#EDB354] uppercase mb-2 pt-6">Why Choose Us!</p>
          <h1 className="text-3xl mb-4">Why People Choose Us!</h1>
        </div>
        <div className="container py-5 mx-auto">
          <div className="mx-8 lg:flex lg:justify-center gap-10 lg:items-start">
            <div className="w-full lg:w-1/2 px-8 relative">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center relative">
                  <div className="absolute left-1/2 w-[2px] bg-[#EDB354] h-full transform -translate-x-1/2"></div>
                  
                  <div className="flex flex-col gap-12 z-10">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#EDB354] text-white flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faTools} className="text-3xl" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#EDB354] text-white flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faTag} className="text-3xl" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#EDB354] text-white flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faHeadset} className="text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pl-8 lg:pl-24">
                  <article className="relative py-10 px-6 bg-white border rounded-md shadow-md">
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[1rem] border-b-[1rem] border-l-[1rem] border-transparent border-r-white transform translate-x-[-1rem] translate-y-[-1rem]"></div>
                    <p className="text-2xl font-semibold">Trusted Service Center</p>
                    <p>
                      "Welcome to our trusted service center"
                      <Link to="#" className="text-[#EDB354]"> Read more..</Link>
                    </p>
                  </article>

                  <article className="relative py-10 px-6 bg-white border rounded-md shadow-md">
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[1rem] border-b-[1rem] border-l-[1rem] border-transparent border-r-white transform translate-x-[-1rem] translate-y-[-1rem]"></div>
                    <p className="text-2xl font-semibold">Reasonable Price</p>
                    <p>
                      "At our service center, we take pride in offering"
                      <Link to="/reasonable" className="text-[#EDB354]"> Read more..</Link>
                    </p>
                  </article>

                  <article className="relative py-10 px-6 bg-white border rounded-md shadow-md">
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[1rem] border-b-[1rem] border-l-[1rem] border-transparent border-r-white transform translate-x-[-1rem] translate-y-[-1rem]"></div>
                    <p className="text-2xl font-semibold">24/7 Support</p>
                    <p>
                      "Our 24/7 support is designed with your"
                      <Link to="/twenty_four" className="text-[#EDB354]"> Read more..</Link>
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-8 pt-8 lg:pt-0">
              <div className="grid grid-cols-2 gap-3">
                <figure className="flex flex-col items-end">
                  <img className="bg-white p-3 w-full h-auto object-cover mb-3" src={hero1} alt="Hero 1" />
                  <img className="bg-white p-3 w-1/2 h-auto object-cover" src={hero3} alt="Hero 3" />
                </figure>
                <figure className="flex flex-col">
                  <img className="bg-white p-3 w-1/2 h-auto object-cover mb-3" src={hero4} alt="Hero 4" />
                  <img className="bg-white p-3 w-full h-auto object-cover" src={hero2} alt="Hero 2" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
