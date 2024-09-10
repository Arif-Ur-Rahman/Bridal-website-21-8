import React from 'react';
 
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
import DemoCarousel from './hero/HeroSection';
// import ImageSlider from './hero/HeroSection';


const Homepage = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavbarNew />
            <DemoCarousel></DemoCarousel>
            {/* <ImageSlider></ImageSlider> */}
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
