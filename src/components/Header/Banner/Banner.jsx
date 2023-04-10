import React from 'react';

const Banner = () => {
    return (
        <div className='my-bg-clr lg:px-20 '>
            <div className="banner lg:flex lg:flex-row flex gap-5 px-5 lg:px-0 flex-col-reverse lg:h-[87.6vh] justify-between items-center ">
        <div className="title lg:w-[100%] w-full space-y-5">
          <h1 className="text-xl lg:text-3xl font-bold">
            One Step Closereee To Get Your{" "}
            <span className="text-blue-600">Halal Job </span>{" "}
          </h1>
          <h1 className="text-sm">
          Halal job website will help you to get Halal job according to Islamic Shariah. If you want to get halal job then start applying for registered jobs by making CV on the website.
          </h1>
          <button className="my-btn">Get Started</button>
        </div>
        <div className="lg:w-[50%] w-full"></div>
        <img className="w-[100%] lg:h-[87.6vh]" src="banner.svg" alt="" />
      </div>
        </div>
    );
};

export default Banner;