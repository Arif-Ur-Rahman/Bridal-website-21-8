import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import m6 from "../assets/img/cut.jpg";
import m1 from "../assets/img/adj.jpg";
import m2 from "../assets/img/alt.jpg";
import Navbar from "../Home/Shared/SubNavbar";
import Footer from "../Home/Shared/Footer";

const tabData = [
  {
    name: "Cutting",
    img: m6,
    description: "Ha Noi is the capital and second-largest city of Vietnam, located on the western bank of the Red River. It is a political, cultural, educational and economic center of the country, with a rich history and heritage. Ha Noi has many historical and cultural attractions, such as the Hoang Thanh Thang Long (the Imperial Citadel), the Temple of Literature, the Ho Chi Minh Mausoleum and the Hanoi Opera House. Ha Noi is also known for its cuisine, handicrafts and festivals, which reflect the diversity and traditions of the city. Ha Noi is a charming and vibrant destination that offers a glimpse into the history and culture of Vietnam."
  },
  {
    name: "Adjusting",
    img: m1,
    description: "Ho Chi Minh City is the most populous and vibrant city in Vietnam, with a history that spans from the French colonial era to the present day. It is a cultural and economic hub that offers many attractions for visitors, such as the War Remnants Museum, the Notre Dame Cathedral, the Ben Thanh Market and the Cu Chi Tunnels. Ho Chi Minh City is also known for its delicious cuisine, lively nightlife and diverse festivals that celebrate the traditions and spirit of the city. Ho Chi Minh City is a fascinating destination that showcases the history and culture of Vietnam."
  },
  {
    name: "Alter",
    img: m2,
    description: "Da Nang City is a vibrant and modern city in central Vietnam, with a rich history and culture. It has a beautiful coastline, a well-sheltered port, and a strategic location on the main transport routes of the country. Da Nang City is home to many attractions, such as the Son Tra Peninsula, the Marble Mountains, the Cham Museum of Sculpture, and the War Remnants Museum. Da Nang City is also famous for its delicious street food, especially the noodle dish Mi Quang. Da Nang City is a charming and dynamic destination that showcases the history and culture of Vietnam."
  }
];

const SubService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="container-tab bg-light py-8 bg-[#FDF5EB]  px-20 mt-36 ">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
        <h1 className="text-4xl font-semibold">We Provide Best Professional Services</h1>
      </div>
      <div className="tab__bar">
        <div className="tab__navigation flex justify-center items-center my-4 space-x-4">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`tab__btn py-2 px-4 rounded ${activeTab === index ? "bg-yellow-600 text-white" : "bg-yellow-500 text-slate-500"}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="tab__content mt-8"
      >
        <div className="grid grid-cols-2 gap-10 mx-auto">
          <div className="left-column">
            <img src={tabData[activeTab].img} alt={tabData[activeTab].name} className="w-full rounded-lg" />
          </div>
          <div className="right-column mt-8">
            <div className="info">
              <h2 className="text-2xl text-slate-600 font-semibold">{tabData[activeTab].name}</h2>
              <div className="description text-slate-500 mt-4">
                <p>{tabData[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default SubService;
