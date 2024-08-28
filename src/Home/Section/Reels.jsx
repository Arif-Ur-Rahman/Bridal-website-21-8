import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';

import a from "../../assets/hero.mp4";
import b from "../../assets/h.mp4";
import c from "../../assets/hero1.mp4";
import d from "../../assets/v.mp4";

// Sample data for reels with video URLs
const reelsData = [
  { id: 1, videoUrl: b },
  { id: 2, videoUrl: a },
  { id: 3, videoUrl: d },
  { id: 4, videoUrl: a },
  { id: 5, videoUrl: b },
  { id: 6, videoUrl: d },
  { id: 7, videoUrl: c },
  // Add more videos as needed
];

const Reels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <section className="relative py-16 px-8 bg-[#FDF5EB] font-mono my-5">
      <h1 className="text-3xl mb-4 text-center">Reels Videos</h1>
      <div className="relative">
        <Slider {...settings}>
          {reelsData.map((reel) => (
            <div
              key={reel.id}
              className="relative w-full h-full bg-white shadow-lg rounded-none overflow-hidden flex-shrink-0"
            >
              <video
                src={reel.videoUrl}
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                muted
                onClick={() => openModal(reel.videoUrl)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Video Playback */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Video Lightbox"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 "
        overlayClassName="fixed inset-0"
      >
        <button
          onClick={closeModal}
          className="absolute bottom-4 left-4 text-white text-4xl"
        >
          ×
        </button>
        <video
          controls
          autoPlay
          src={currentVideo}
          className="w-1/2 max-w-lg h-1/2"
        >
          Your browser does not support the video tag.
        </video>
      </Modal>
    </section>
  );
};

export default Reels;
