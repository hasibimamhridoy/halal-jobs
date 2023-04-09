import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';

const Layout = () => {
    return (

        <div className='border border-red-400 my-container' >
            <div className="navbarContainer my-bg-clr ">
                <Navbar></Navbar>
            </div>

            <div className="outlet ">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Layout;