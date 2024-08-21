// src/AutoPlayVideo.jsx
import React from 'react';
import video1 from "../../assets/1.mp4"
import video2 from "../../assets/2.mp4"

const Videos = () => {
  return (
    <div className="relative  mt-16">
      <video
        src={video1}
          // Optional: Adds a preview image before the video starts
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
       
      </video>
      <video
        src={video2}
          // Optional: Adds a preview image before the video starts
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
       
      </video>
    </div>
  );
};

export default Videos;
