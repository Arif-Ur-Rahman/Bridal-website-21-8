import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDash = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminDash;
