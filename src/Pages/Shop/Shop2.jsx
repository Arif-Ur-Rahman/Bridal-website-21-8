import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import c2 from "../../assets/img/c2.jpg";
import cu6 from "../../assets/img/cu6.jpg";
import cu8 from "../../assets/img/cu8.jpg";
import b5 from "../../assets/img/b5.jpg";
import hero1 from '../../assets/img/hero-1.jpg'; // Adjust the path to your image
import hero2 from '../../assets/img/hero-2.jpg'; // 
 
import { motion } from "framer-motion";
import Navbar from "../../Home/Shared/SubNavbar";
import Footer from "../../Home/Shared/Footer";

const Shop2 = () => {
  return (
   <>
   <Navbar></Navbar>
   <div className="container-fluid hero-header bg-yellow-50 pt-4 mb-4 px-16 mt-36">
    {/* head to head mamu */}
    {/* <div className="container-fluid bg-light py-5 mb-5">
      <div className="container py-5 mx-auto">
        <div className="flex items-center justify-between space-x-10 align-items-center">
          <div className="col-lg-6">
            <h1 className="text-4xl font-bold mb-3 animate-slideInDown">Shop</h1>
            <nav aria-label="breadcrumb" className="animate-slideInDown">
              <ol className="breadcrumb mb-0 flex space-x-2">
                <li className="breadcrumb-item text-yellow-600"><a href="#">Home</a></li>
                <p>/</p>
                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                <p>/</p>
                <li className="breadcrumb-item active" aria-current="page">Shop-1</li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 animate-fadeIn">
            <div className="flex items-center justify-between space-x-4">
              <div className="col-6 text-end">
                <img className="img-fluid bg-white p-3 w-64" src={hero1} alt="Hero 1" />
              </div>
              <div className="col-6">
                <img className="img-fluid bg-white p-3 w-64" src={hero2} alt="Hero 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* head to head lolo */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col items-start lg:mb-52 space-y-4">
              <img
                className="img-fluid   selection: bg-white p-3 w-full mb-4"
                src={c2}
                alt="Image 1"
              />
              <img
                className="img-fluid    bg-white p-3 w-1/2"
                src={cu6}
                alt="Image 2"
              />
            </div>
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="fact-item bg-white text-center h-full p-10 lg:mb-96 rounded-lg shadow-lg">
              <a href="/" className="navbar-brand">
                <h1 className="text-5xl text-yellow-600 font-playfair">Shop-3</h1>
              </a>
              <div className="mt-4">
                <p className="mb-6 text-slate-500">
                  Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy.
                </p>
                <div className="flex items-center mb-4 ml-6">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-600" />
                  <p className="mb-0 text-slate-500">123 Street, New York, USA</p>
                </div>
                <div className="flex items-center mb-4 ml-6">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-yellow-600" />
                  <p className="mb-0 text-slate-500">+012 345 67890</p>
                </div>
                <div className="flex items-center ml-6">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow-600" />
                  <p className="mb-0 text-slate-500">info@example.com</p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <a
                  className="btn btn-square rounded-full mr-2"
                  href="#"
                  style={{ backgroundColor: "#1DA1F2", color: "white" }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="btn btn-square rounded-full mr-2"
                  href="#"
                  style={{ backgroundColor: "#3b5998", color: "white" }}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="btn btn-square rounded-full mr-2"
                  href="#"
                  style={{ backgroundColor: "#0077B5", color: "white" }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  className="btn btn-square rounded-full mr-2"
                  href="#"
                  style={{ backgroundColor: "#E1306C", color: "white" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="order-3 lg:order-3">
            <div className="flex flex-col space-y-4">
              <img
                className="img-fluid   bg-white p-3 w-1/2 mb-4"
                src={cu8}
                alt="Image 3"
              />
              <img
                className="img-fluid  bg-white p-3 w-full"
                src={b5}
                alt="Image 4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer></Footer>
   </>
  );
};

export default Shop2;
