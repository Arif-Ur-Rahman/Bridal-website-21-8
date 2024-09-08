import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactForm = () => {
    return (
       <div className="bg-yellow-50 py-4 mt-32 mx-auto">
             <div className="container mx-auto py-12">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 mx-8">
                {/* Contact Form */}
                <div className="w-full lg:w-1/2">
                    <div className="text-center mx-auto mb-8">
                        <h1 className="text-yellow-600 text-4xl font-bold">If You Have Any Query, Please Contact</h1>
                    </div>
                    <form>
                        <div className="space-y-4">
                            <div className="flex space-x-4">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="review-username"
                                    id="review-username"
                                    placeholder="Name"
                                    className="input input-bordered border-1 focus:border-[#EDB354] focus:outline-none w-1/2"
                                    required
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="review-useremail"
                                    id="review-useremail"
                                    placeholder="Email"
                                    className="input input-bordered border-1 focus:border-[#EDB354] focus:outline-none w-1/2"
                                    required
                                />
                            </div>

                            {/* Subject Input */}
                            <input
                                type="text"
                                name="review-usersubject"
                                id="review-usersubject"
                                placeholder="Subject"
                                className="input input-bordered w-full border-1 focus:border-[#EDB354] focus:outline-none"
                                required
                            />

                            {/* Message Textarea */}
                            <textarea
                                id="review_message"
                                placeholder="Message"
                                className="textarea textarea-bordered w-full border-1 focus:border-[#EDB354] focus:outline-none"
                                rows="4"
                                required
                            />

                            {/* Submit Button */}
                            <div className="text-center mt-4">
                                <button type="submit" className="btn bg-yellow-600 py-3 px-5 text-white">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="w-full lg:w-1/2 bg-yellow-50 text-center px-8 mt-8 lg:mt-0">
                    <h1 className="text-yellow-600 text-4xl font-bold">Information</h1>
                    <p className="mt-4 text-slate-500 ">Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy.</p>
                    <div className="mt-6 space-y-2 items-start">
                        <div className="flex items-start justify-center">
                          <div className=" ">
                          {/* <FaMapMarkerAlt className="text-yellow-600 " /> */}
                          </div>
                           <div className="">
                           <p className="text-slate-500">West-Kruiskade 83, 3014 AN Rotterdam, Nederland</p>
                           </div>
                        </div>
                        <div className="flex items-start justify-center">
                            <FaPhoneAlt className="text-yellow-600 mr-2" />
                            <p className="text-slate-500">0031 (0)10 236 08 82</p>
                        </div>
                        <div className="flex items-start justify-center">
                            <FaEnvelope className="text-yellow-600 mr-2" />
                            <p className="text-slate-500">hi@diamondbridal.nl</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6 space-x-3">
                        <a className="btn btn-square rounded-full" href="#" style={{ backgroundColor: "#1DA1F2", color: "white" }}>
                            <FaTwitter />
                        </a>
                        <a className="btn btn-square rounded-full" href="#" style={{ backgroundColor: "#3b5998", color: "white" }}>
                            <FaFacebookF />
                        </a>
                        <a className="btn btn-square rounded-full" href="#" style={{ backgroundColor: "#0077B5", color: "white" }}>
                            <FaLinkedinIn />
                        </a>
                        <a className="btn btn-square rounded-full" href="#" style={{ backgroundColor: "#E1306C", color: "white" }}>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ContactForm;
