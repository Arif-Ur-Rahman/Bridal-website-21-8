import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/img/testimonial-1.jpg";
import img2 from "../../../assets/img/testimonial-2.jpg";
import img3 from "../../../assets/img/testimonial-3.jpg";
import img4 from "../../../assets/img/testimonial-4.jpg";

const testimonials = [
    {
        id: 1,
        name: "Client Name 1",
        profession: "Profession 1",
        image: img1,
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
        id: 2,
        name: "Client Name 2",
        profession: "Profession 2",
        image: img2,
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
        id: 3,
        name: "Client Name 3",
        profession: "Profession 3",
        image: img3,
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    },
    {
        id: 4,
        name: "Client Name 4",
        profession: "Profession 4",
        image: img4,
        feedback: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit."
    }
];

const TestimonialsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        },
        afterChange: (current) => {
            setCurrentSlide(current);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="p-4 transition-transform duration-500">
                        <div className={`p-4 w-96 rounded-none ${currentSlide === index ? 'bg-[#EDB354] text-white' : 'bg-white bg-black'}`}>
                            <div className="relative ml-6">
                              <div className="flex items-center">
                              <img 
                                    className="w-16 h-16 rounded-full border-1 border-white absolute top-[-5px]"
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                />
                                <div className="ml-20">
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500 ">{testimonial.profession}</p>
                                </div>
                              </div>
                                <div className="mt-8">
                                    
                                    <p className="mt-2 text-gray-500">{testimonial.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialsSlider;
