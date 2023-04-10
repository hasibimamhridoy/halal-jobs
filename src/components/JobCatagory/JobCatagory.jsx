import React from 'react';

const JobCatagory = ({jobCatagory}) => {
    return (
        <div className="jobCatagory mt-10 mb-10 lg:px-20  px-2 space-y-10">
        
        <div className="space-y-4">
        <h1 className="my-title">Job Category List</h1>
        <h1 className="my-title-desc">
          There are four catagory to get you halal dream job.Halal jobs helps you get the halal Jobs
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
    );
};

export default JobCatagory;