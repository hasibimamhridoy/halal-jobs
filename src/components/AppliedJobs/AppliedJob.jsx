import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const AppliedJob = () => {
  const [handleApplyNow, applyJob, filterbyTime,filterValue,setIsfilter,isFilter] = useOutletContext();

  
console.log(isFilter);

  function handleTrueFalse(){
    setIsfilter(true)
  }
  

  return (
    <div>
      <div className="title my-bg-clr h-52 flex items-center justify-center">
        <h1 className="my-title">Applied Jobs</h1>
      </div>

      <div className="flex lg:justify-end justify-center">

        <select onChange={(event) =>filterbyTime(event.target.value) } className="select select-secondary rounded-md mt-10  lg:w-[15%]">
          <option disabled selected>
            Filter by
          </option>
          <option value='Show All'>Show All</option>
          <option value='Remote'>Remote</option>
          <option value='Onsite'>On Site</option>
         
        </select>
      </div>

      <div className="space-y-5 mt-5 lg:pb-10 mx-2 ">
        
        
        {!isFilter ? applyJob.map((job, i) => {
          return (
            <div
              key={i}
              className="my-card rounded-md lg:flex lg:flex-row  items-center justify-between space-x-5 space-y-1 lg:px-5 px-2 py-5 border border-solid border-gray-300"
            >
              <div>
                <div className="lg:flex lg:flex-row items-center space-x-5">
                  <div className="icon lg:p-0 pl-3 w-fit rounded-lg">
                    <img
                      className="w-40 h-12 rounded-md"
                      src={job.company_logo}
                      alt=""
                    />
                  </div>

                  <div className="py-3">
                    <h1 className="text-lg">{job.job_title}</h1>
                    <h1 className="text-sm text-gray-500">
                      {job.company_name}
                    </h1>
                    <div className="full-time lg:flex lg:flex-row gap-3 lg:space-y-0 space-y-3 lg:gap-5 mt-3">
                      <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">
                        {job.remote_or_onsite}
                      </h1>
                      <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">
                        {job.fulltime_or_parttime}
                      </h1>
                    </div>

                    <div className="location-salary lg:flex lg:flex-row lg:items-center lg:space-y-0 space-y-3 lg:gap-3 lg-gap-5 mt-3">
                      <div className="location flex items-center ">
                        <MapPinIcon className="w-4 h-4"></MapPinIcon>
                        <h1>{job.location}</h1>
                      </div>
                      <div className="salary flex items-center">
                        <CurrencyDollarIcon className="w-4 h-4"></CurrencyDollarIcon>
                        <h1>{job.salary}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <Link to={`/featuredJobs/${job.id}`}>
                  <button className="my-btn lg:mt-3">View Details</button>
                </Link>
              </div>
            </div>
          );
        }):
        
        filterValue.map((job, i) => {
          return (
            <div
              key={i}
              className="my-card rounded-md lg:flex lg:flex-row  items-center justify-between space-x-5 space-y-1 lg:px-5 px-2 py-5 border border-solid border-gray-300"
            >
              <div>
                <div className="lg:flex lg:flex-row items-center space-x-5">
                  <div className="icon lg:p-0 pl-3 w-fit rounded-lg">
                    <img
                      className="w-40 h-12 rounded-md"
                      src={job.company_logo}
                      alt=""
                    />
                  </div>

                  <div className="py-3">
                    <h1 className="text-lg">{job.job_title}</h1>
                    <h1 className="text-sm text-gray-500">
                      {job.company_name}
                    </h1>
                    <div className="full-time lg:flex lg:flex-row gap-3 lg:space-y-0 space-y-3 lg:gap-5 mt-3">
                      <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">
                        {job.remote_or_onsite}
                      </h1>
                      <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">
                        {job.fulltime_or_parttime}
                      </h1>
                    </div>

                    <div className="location-salary lg:flex lg:flex-row lg:items-center lg:space-y-0 space-y-3 lg:gap-3 lg-gap-5 mt-3">
                      <div className="location flex items-center ">
                        <MapPinIcon className="w-4 h-4"></MapPinIcon>
                        <h1>{job.location}</h1>
                      </div>
                      <div className="salary flex items-center">
                        <CurrencyDollarIcon className="w-4 h-4"></CurrencyDollarIcon>
                        <h1>{job.salary}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <Link to={`/featuredJobs/${job.id}`}>
                  <button className="my-btn lg:mt-3">View Details</button>
                </Link>
              </div>
            </div>
          );
        })

        }


      </div>
    </div>
  );
};

export default AppliedJob;
