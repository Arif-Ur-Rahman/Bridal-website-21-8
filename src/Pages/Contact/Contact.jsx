// Main App Component
import Footer from "../../Home/Shared/Footer";
import Navbar from "../../Home/Shared/SubNavbar";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
      <>
      <Navbar></Navbar>
  
        {/* Header */}
        {/* <div className="container-fluid bg-[#F1F1F1] py-4 mt-32 mx-auto">
          <div className="container">
            <div className="row">
              <div className="">
                <nav className="ml-10">
                  <ol className="breadcrumb flex space-x-2 ">
                    <li className="breadcrumb-item text-yellow-600">
                      <a href="/">Home</a>
                    </li>
                    <p>/</p>
                    <li className="breadcrumb-item active text-slate-500" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
   */}
        {/* Contact Form */}
        <ContactForm />
  
        {/* Google Map */}
        <div className="container-fluid py-12 px-0 min-h-full">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1230.3777720529486!2d4.46676!3d51.920171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a36ef57897%3A0x35b6c393dac10ea7!2sWest-Kruiskade%2083%2C%203014%20AN%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2sbd!4v1688488043985!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer></Footer>
      </>
    );
  };
  
  export default Contact;