import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobCatagory = useLoaderData();
  console.log(jobCatagory);

  return (
    <div className="">
      <div className="banner my-bg-clr lg:flex lg:flex-row flex gap-5 px-5 lg:px-0 flex-col-reverse lg:h-[87vh] justify-between items-center ">
        <div className="title lg:w-[50%] w-full space-y-5">
          <h1 className="text-xl lg:text-3xl font-bold">
            One Step Closereee To Your Dream{" "}
            <span className="text-blue-600">Halal Job </span>{" "}
          </h1>
          <h1 className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            sed repudiandae ipsam quasi, earum quaerat esse molestias temporibus
            dicta dolorem autem sequi inventore nulla natus reiciendis magni
            praesentium? Dolorem, beatae?
          </h1>
          <button className="my-btn">Get Started</button>
        </div>
        <div className="lg:w-[50%] w-full"></div>
        <img className="w-[100%] lg:h-[87vh]" src="banner.svg" alt="" />
      </div>

      <div className="jobCatagory mt-10 mb-10 px-2 lg:px-0 space-y-10">
        
        <div className="space-y-4">
        <h1 className="my-title">Job Category List</h1>
        <h1 className="my-title-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          sunt necessitatibus cupiditate laborum error explicabo?
        </h1>
        </div>

        <div className="cardCategory items-center p-3 lg:p-0 lg:gap-5 gap-3 grid grid-cols-1 lg:grid-cols-4 ">
          {jobCatagory.map((jobCatagory,i) => {
            return (
              <div key={i} className="my-card rounded-md flex flex-col justify-center space-y-1 px-5 py-5 my-bg-clr">
                <div className="icon w-fit bg-gray-100 rounded-lg p-4">
                  <img src={jobCatagory.img_src} alt="" />
                </div>

                <div className="py-3">
                <h1 className="text-lg">{jobCatagory.job_title}</h1>
                <h1 className="text-sm text-gray-500">{jobCatagory.available_jobs_count} Jobs Avaiable</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
