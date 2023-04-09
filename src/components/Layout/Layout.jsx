import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';

const Layout = () => {
    return (

        <div>
            <div className="navbarContainer my-container">
                <Navbar></Navbar>
            </div>

            <div className="outlet my-container">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Layout;