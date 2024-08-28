import React from 'react';
import 'tailwindcss/tailwind.css';
import ModalImage from "react-modal-image";

// Importing images
import project5 from "../../assets/img/project-5.jpg";
import service1 from "../../assets/img/service-1.jpg";
import cu3 from "../../assets/img/cu3.jpg";
import cu6 from "../../assets/img/cu6.jpg";
import project7 from "../../assets/img/project-7.jpg";
import hero2 from "../../assets/img/hero-2.jpg";
import cu4 from "../../assets/img/cu4.jpg";
import cu8 from "../../assets/img/cu8.jpg";

const MomentsWithCustomers = () => {
  const images = [
    { src: project5, delay: '0.1s' },
    { src: service1, delay: '0.1s' },
    { src: cu3, delay: '0.3s' },
    { src: cu6, delay: '0.3s' },
    { src: project7, delay: '0.5s' },
    { src: hero2, delay: '0.5s' },
    { src: cu4, delay: '0.7s' },
    { src: cu8, delay: '0.7s' }
  ];

  return (
    <section className="container-xxlbg-[#FDF5EB] font-mono py-6">
      <div className="container  mx-auto ">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <h1 className="display-6 mb-0 text-3xl pt-6">Moments With Customers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-10 py-6">
          {/* Manually position the images */}
          <div className="col-span-1 lg:col-start-1 lg:row-start-1 space-y-4">
            <div className="relative">
              <ModalImage
                small={images[0].src}
                large={images[0].src}
                alt="Customer Moment 1"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[0].delay }}
              />
            </div>
            <div className="relative">
              <ModalImage
                small={images[1].src}
                large={images[1].src}
                alt="Customer Moment 2"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[1].delay }}
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-start-2 lg:row-start-1 space-y-4">
            <div className="relative">
              <ModalImage
                small={images[2].src}
                large={images[2].src}
                alt="Customer Moment 3"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[2].delay }}
              />
            </div>
            <div className="relative">
              <ModalImage
                small={images[3].src}
                large={images[3].src}
                alt="Customer Moment 4"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[3].delay }}
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-start-3 lg:row-start-1 space-y-4">
            <div className="relative">
              <ModalImage
                small={images[4].src}
                large={images[4].src}
                alt="Customer Moment 5"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[4].delay }}
              />
            </div>
            <div className="relative">
              <ModalImage
                small={images[5].src}
                large={images[5].src}
                alt="Customer Moment 6"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[5].delay }}
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-start-4 lg:row-start-1 space-y-4">
            <div className="relative">
              <ModalImage
                small={images[6].src}
                large={images[6].src}
                alt="Customer Moment 7"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[6].delay }}
              />
            </div>
            <div className="relative">
              <ModalImage
                small={images[7].src}
                large={images[7].src}
                alt="Customer Moment 8"
                className="img-fluid project-title h5 mb-0 border-8 border-white hover:border-[#EDB354] transition-colors duration-300"
                style={{ animationDelay: images[7].delay }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsWithCustomers;
