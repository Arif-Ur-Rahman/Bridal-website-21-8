import React from 'react';
import Groom from '../../Home/Section/Groom';
import Navbar from '../../Home/Shared/NavbarNew';
import Footer from '../../Home/Shared/Footer';
 
const Category1 = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="mt-36">
          <div className="min-h-screen">
          <Groom></Groom>
          </div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default Category1;