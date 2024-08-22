import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import NavbarNew from './Shared/NavbarNew';
import ChooseUs from './Section/ChooseUs';
import FeedbackModal from './Section/Feedback/FeedbackModal';
import Collection from './Section/Collection';
import Bride from './Section/Bride';
import Groom from './Section/Groom';
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
            <FeedbackModal /> {/* Modal will show immediately */}
            <Groom></Groom>
            <Moments />
            
            <Footer />
        </div>
    );
};

export default Homepage;
