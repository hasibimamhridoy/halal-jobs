import React from "react";
import { Link, useParams } from "react-router-dom";

const FeaturedJobs = ({ featuredJobs }) => {
  console.log(featuredJobs);

  return (
    <div>
      {featuredJobs.map((fd) => {
        return (
          <div>
            <div className="job mt-10 mb-10 px-2 lg:px-0 space-y-10">
              <div className="space-y-4">
                <h1 className="my-title">Featured Jobs</h1>
                <h1 className="my-title-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti sunt necessitatibus cupiditate laborum error
                  explicabo?
                </h1>
              </div>

              <div className="cardCategory items-center p-3 lg:p-0 lg:gap-5 gap-3 grid grid-cols-1 lg:grid-cols-2 ">
                {featuredJobs.map((job, i) => {
                  return (
                    <div
                      key={i}
                      className="my-card rounded-md flex flex-col justify-center space-y-1 px-5 py-5 border border-solid border-gray-300"
                    >
                      <div className="icon w-fit rounded-lg">
                        <img className="w-40 h-12 rounded-md" src={job.company_logo} alt="" />
                      </div>

                      <div className="py-3">
                        <h1 className="text-lg">{job.job_title}</h1>
                        <h1 className="text-sm text-gray-500">
                          {job.company_name}
                        </h1>
                        <div className="full-time flex gap-3 lg:gap-5 mt-3">
                        <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">{job.remote_or_onsite}</h1>
                        <h1 className="border px-6 py-1 rounded-sm text-center border-solid border-blue-600 text-blue-500">{job.fulltime_or_parttime}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>





            <Link to={`/featuredJobs/${fd.id}`}>
              <button className="my-btn">Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedJobs;
