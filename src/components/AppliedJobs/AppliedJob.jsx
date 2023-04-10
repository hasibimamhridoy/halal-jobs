import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';

const AppliedJob = () => {
    const [handleApplyNow,applyJob] = useOutletContext()

    console.log(applyJob);
    return (
        <div>
            <div className="title my-bg-clr h-52 flex  items-center justify-center">
          <h1 className="my-title">Applied Jobs</h1>

          

        </div>

        {applyJob.map((job,i)=>{
            return(
                <div
              key={i}
              className="my-card rounded-md flex flex-col justify-center space-y-1 px-5 py-5 border border-solid border-gray-300"
            >
              <div className="icon w-fit rounded-lg">
                <img
                  className="w-40 h-12 rounded-md"
                  src={job.company_logo}
                  alt=""
                />
              </div>

              <div className="py-3">
                <h1 className="text-lg">{job.job_title}</h1>
                <h1 className="text-sm text-gray-500">{job.company_name}</h1>
                <div className="full-time flex gap-3 lg:gap-5 mt-3">
                  <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">
                    {job.remote_or_onsite}
                  </h1>
                  <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">
                    {job.fulltime_or_parttime}
                  </h1>
                </div>

                <div className="location-salary flex items-center gap-3 lg-gap-5 mt-3">
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
            )
          })}

        </div>
    );
};

export default AppliedJob;