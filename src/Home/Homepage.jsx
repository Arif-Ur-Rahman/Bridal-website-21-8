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
import WhatsApp from './WhatsApp';
import Scroll from './Scroll';


const Homepage = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavbarNew />
            <HeroSection />
            <ChooseUs />
            <Collection></Collection>
            <Reels />
            <Bride></Bride>
            <FeedbackModal /> 
            <Groom></Groom>
            <Moments />
            
            <Footer />
            <WhatsApp></WhatsApp>
            <Scroll></Scroll>
        </div>
    );
};

export default Homepage;
