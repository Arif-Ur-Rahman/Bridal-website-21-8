import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import Footer from './Shared/Footer';
// import Cover from './Section/Cover';
// import Vedios from './Section/Vedios';
import NavbarNew from './Shared/NavbarNew';
import ChooseUs from './Section/ChooseUs';
import Moments from './Section/Moments';
import FeedbackModal from './Section/Feedback/FeedbackModal';

const Homepage = () => {
    return (
        <div className=''>
            <NavbarNew />
            <HeroSection />
            <Reels />
            <ChooseUs />
            <Moments />
            <FeedbackModal /> {/* Modal will show immediately */}
            {/* <Cover />
            <Vedios /> */}
            <Footer />
        </div>
    );
};

export default Homepage;
