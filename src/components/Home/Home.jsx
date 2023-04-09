import React from 'react';

const Home = () => {
    return (
        <div className=''>
            <div className="banner lg:flex lg:flex-row flex gap-5 px-5 lg:px-0 flex-col-reverse lg:h-[87vh] justify-between items-center ">
            <div className="title lg:w-[50%] w-full space-y-5">
                <h1 className='text-xl lg:text-3xl font-bold'>One Step Closereee To Your Dream <span className='text-blue-600'>Halal Job </span> </h1>
                <h1 className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sed repudiandae ipsam quasi, earum quaerat esse molestias temporibus dicta dolorem autem sequi inventore nulla natus reiciendis magni praesentium? Dolorem, beatae?</h1>
                <button className='my-btn'>Get Started</button>
            </div>
            <div className="lg:w-[50%] w-full"></div>
            <img className='w-[100%] lg:h-[87vh]' src="banner.svg" alt="" />
            </div>
        </div>
    );
};

export default Home;