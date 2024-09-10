import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/1.avif';
import img2 from '../../assets/2.avif';
import img3 from '../../assets/3.avif';
import img4 from '../../assets/4.avif';
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
                className="dot"
            />
        ),
        dotsClass: "slick-dots custom-dots",
    };

    return (
        <div className="relative w-full overflow-hidden">
            <Slider {...settings}>
                <div className="w-full">
                    <img src={img1} alt="Slide 1" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <img src={img2} alt="Slide 2" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <img src={img3} alt="Slide 3" className="w-full h-auto object-cover" />
                </div>
                <div className="w-full">
                    <img src={img4} alt="Slide 4" className="w-full h-auto object-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default DemoCarousel;
