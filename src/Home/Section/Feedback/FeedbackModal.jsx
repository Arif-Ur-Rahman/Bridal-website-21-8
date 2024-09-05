import React, { useState } from 'react';
import Testimonials from "./Testimonials";

const FeedbackSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="bg-[#FDF5EB] font-mono mb-4">
            <div className="px-0 py-5">
                <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
                    <h1 className="text-3xl mt-6 mb-0">Customers Feedback</h1>
                    <br />
                    <button 
                        onClick={handleModalOpen} 
                        className="relative bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg shadow-md"
                    >
                        <span className="relative z-10 px-2 py-8">Add Feedback</span>
                    </button>
                </div>
                <br />
                <Testimonials />

                {/* Feedback Modal */}
                {isModalOpen && (
                    <div className="modal modal-open modal-video fade">
                        <div className="modal-box bg-[#FDF5EB] p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                            <div className="modal-header flex justify-between items-center">
                                <h3 className="text-2xl font-medium">Feedback Form</h3>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={handleModalClose}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body mt-4">
                                <div className="row g-0 justify-content-center">
                                    <div className="w-full">
                                        <div className="p-5 border border-gray-300 rounded">
                                            <input 
                                                type="text" 
                                                name="review-username" 
                                                id="review-username" 
                                                placeholder="Name" 
                                                className="input input-bordered w-full mb-4 border-2 focus:border-[#EDB354] focus:outline-none "
                                                required 
                                            />
                                            <textarea 
                                                id="rewiew_message" 
                                                placeholder="Message" 
                                                className="textarea textarea-bordered w-full mb-4 border-2 focus:border-[#EDB354] focus:outline-none " 
                                                rows="4" 
                                                required 
                                            />
                                            <input 
                                                type="file" 
                                                id="review-userimage" 
                                                className="file-input file-input-bordered w-full mb-4 border-2 focus:border-[#EDB354] focus:outline-none "
                                                required 
                                            />
                                            <button 
                                                className="btn bg-[#EDB354]  w-full" 
                                                type="submit"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeedbackSection;
