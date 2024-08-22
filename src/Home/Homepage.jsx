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
import Collection from './Section/Collection';

const Homepage = () => {
    return (
        <div className=''>
            <NavbarNew />
            <HeroSection />
            <ChooseUs />
            <Collection></Collection>
            <Reels />
            <Moments />
            <FeedbackModal /> {/* Modal will show immediately */}
            {/* <Cover />
            <Vedios /> */}
            <Footer />
        </div>
    );
};

export default Homepage;
