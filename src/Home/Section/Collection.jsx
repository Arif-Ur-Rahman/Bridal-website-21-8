import React, { useState } from 'react';
import cu1 from "../../assets/img/cu1.jpg";
import b1 from "../../assets/img/b1.jpg";
import service3 from "../../assets/img/service-3.jpg";
import c2 from "../../assets/img/c2.jpg";
import { Lightbox } from 'react-modal-image';
// import { EyeIcon } from "@heroicons/react/24/outline"; // Ensure this import path is correct
import { FaEye } from 'react-icons/fa'; 
const NewCollections = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };

    const imageItems = [
        { src: cu1, title: 'Weddings' },
        { src: b1, title: 'Portraits' },
        { src: service3, title: 'Fashion' },
        { src: c2, title: 'Editorial' }
    ];

    return (
        <section className='bg-[#FDF5EB] font-mono'>
            <div className="pt-5 pb-20">
                <div className="container py-5 mx-auto">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
                        <h1 className="text-3xl mb-4 py-6">Our New Collections</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
                        {imageItems.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white p-3 rounded-lg shadow-lg relative group hover:bg-[#EDB354] ${index % 2 === 0 ? 'col-span-1' : 'col-span-1 row-start-2'}`}
                                style={{
                                    gridRow: `${index % 2 === 0 ? 'auto' : 'span 2 / auto'}`,
                                    marginTop: index % 2 === 0 ? '0' : '4rem',
                                }}
                            >
                                <img
                                    className="w-full h-96 object-cover rounded-t-lg"
                                    src={item.src}
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="text-white bg-transparent p-2 rounded-full"
                                        onClick={() => handleImageClick(item.src)}
                                    >
                                        <FaEye className="w-8 h-8" />
                                    </button>
                                </div>
                                <div className="text-center p-4">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <Lightbox
                        medium={selectedImage}
                        large={selectedImage}
                        alt="Selected"
                        onClose={handleCloseLightbox}
                    />
                )}
            </div>
        </section>
    );
};

export default NewCollections;
