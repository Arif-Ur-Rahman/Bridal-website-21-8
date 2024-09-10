import React from 'react';
import Navbar from '../../Home/Shared/SubNavbar';
import Footer from '../../Home/Shared/Footer';
import Bride from '../../Home/Section/Bride';

const Category2 = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="mt-36">
            <div className="min-h-screen">
            <Bride></Bride>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default Category2;