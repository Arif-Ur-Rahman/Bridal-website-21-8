import React from 'react';
import HeroSection from './HeroSection';
import Reels from './Section/Reels';
import Footer from './Shared/Footer';
import Cover from './Section/Cover';
import Vedios from './Section/Vedios';
import NavbarNew from './Shared/NavbarNew';
import ChooseUs from './Section/ChooseUs';
 

const Homepage = () => {
    return (
        <div className=''>
            <NavbarNew></NavbarNew>
            {/* <Navbar></Navbar> */}
           
            <HeroSection></HeroSection>
            <Reels></Reels>
            {/* <Collection></Collection> */}
            <ChooseUs></ChooseUs>
            <Cover></Cover>
            <Vedios></Vedios>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;