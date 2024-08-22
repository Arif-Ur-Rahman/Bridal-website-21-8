import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import Bride from './Section/Bride';
import NavbarNew from './Shared/NavbarNew';
import ChooseUs from './Section/ChooseUs';
import FeedbackModal from './Section/Feedback/FeedbackModal';
import Collection from './Section/Collection';
import Moments from './Section/Moments';
import Footer from './Shared/Footer';


const Homepage = () => {
    return (
        <div className=''>
            <NavbarNew />
            <HeroSection />
            <ChooseUs />
            <Collection></Collection>
            <Reels />
            <Bride></Bride>
            <Moments />
            <FeedbackModal /> {/* Modal will show immediately */}
            <Footer />
        </div>
    );
};

export default Homepage;
