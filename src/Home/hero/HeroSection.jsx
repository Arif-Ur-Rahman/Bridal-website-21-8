import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/1.avif';
import img2 from '../../assets/2.avif';
import img3 from '../../assets/3.avif';
import img4 from '../../assets/4.avif';
import mb1 from '../../assets/mb1.jpeg';
import mb2 from '../../assets/mb2.jpeg';
import mb3 from '../../assets/mb3.jpeg';
import mb4 from '../../assets/mb4.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './demo.css'; // Ensure this file includes necessary custom styles

const DemoCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        customPaging: i => (
            <div
                style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    cursor: 'pointer',
                    margin: '0 4px',
                    transition: 'background-color 0.3s, border-color 0.3s',
                }}
                className="dot hidden lg:block"
            />
        ),
        dotsClass: "slick-dots custom-dots",
    };

    return (
       <>
       {/* For big screen */}
        <div className="hidden lg:block relative w-full overflow-hidden bg-[#FDF5EB]">
            <Slider {...settings}>
                <div className="w-full">
                    <img src={img1} alt="Slide 1" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <img src={img3} alt="Slide 2" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <img src={img2} alt="Slide 3" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <img src={img4} alt="Slide 4" className="w-full h-auto object-cover" />
                </div>
            </Slider>
        </div>
        {/* For small screen */}
        <div className="lg:hidden relative w-full overflow-hidden bg-[#FDF5EB]">
            <Slider {...settings}>
                <div className="w-full">
                    <img src={mb1} alt="Slide 1" className="w- h-[950px] object-cover" />
                </div>
                <div className="w-full">
                    <img src={mb3} alt="Slide 2" className="w-full h-[950px]  object-cover" />
                </div>
                <div className="w-full">
                    <img src={mb2} alt="Slide 3" className="w-full h-[950px]  object-cover" />
                </div>
                <div className="w-full">
                    <img src={mb4} alt="Slide 4" className="w-full h-[950px]  object-cover" />
                </div>
            </Slider>
        </div>
       </>
    );
};

export default DemoCarousel;
