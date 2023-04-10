import {
    CurrencyDollarIcon,
    CalendarDaysIcon,
    PhoneIcon,
    EnvelopeIcon,
    MapIcon,
  } from "@heroicons/react/24/solid";
  import React, { useEffect, useState } from "react";
  import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
  
  const FeaturedJobsDetails = () => {

    const [handleApplyNow] = useOutletContext()

    const [displayFeaturedJob, setDisplayFeaturedJob] = useState([]);



    const featuredJobsSingle = useParams();
    const featuredJobs = useLoaderData();
  
    useEffect(() => {
      const clickDetailsFeatured = featuredJobs.find(
        (item) => item.id == featuredJobsSingle.feaId
      );
      setDisplayFeaturedJob(clickDetailsFeatured);
    }, []);
    
    return (
      <div className=" pb-10">
          
          <div className="title my-bg-clr h-52 flex  items-center justify-center">
          <h1 className="my-title">Job Details</h1>
        </div>
  
        <div className="apply-details-container flex justify-between">
          <div className="job-details lg:w-[65%] w-full lg:mt-16 mt-7 space-y-4">
            <h1>
              <span className="font-bold text-md"> Job Description: </span>{" "}
              <span className="text-gray-400">
                {displayFeaturedJob.job_description}
              </span>{" "}
            </h1>
            <h1>
              <span className="font-bold text-md"> Job Responsibility: </span>{" "}
              <span className="text-gray-400">
                {displayFeaturedJob.job_responsibility}
              </span>{" "}
            </h1>
  
            <h1>
              <span className="font-bold text-md">
                {" "}
                Educational Requirenments:{" "}
              </span>{" "}
              <span className="text-gray-400">
                {displayFeaturedJob.educational_requirements}
              </span>{" "}
            </h1>
            <h1>
              <span className="font-bold text-md"> Exprience: </span>{" "}
             
              <span className="text-gray-400">
                {displayFeaturedJob.experiences}
              </span>{" "}
            </h1>
          </div>
  
          <div className="apply-container lg:w-[35%] w-full lg:mt-16 mt-7">
          <div className="apply bg-[#cbc3ed] lg:p-5 -3 rounded-md ">
            <h1 className="font-bold text-md">Job Details</h1>
            <hr className="my-5" />
  
            <div className="salary flex items-center gap-2">
              <CurrencyDollarIcon className="w-4 h-4"></CurrencyDollarIcon>
              <h1>{displayFeaturedJob.salary}</h1>
            </div>
            <div className="salary flex items-center gap-3">
              <CalendarDaysIcon className="w-4 h-4"></CalendarDaysIcon>
              <h1>{displayFeaturedJob.job_title}</h1>
            </div>
  
            <h1 className="font-bold text-md my-5">Contact Information</h1>
  
            <div className="contact-information space-y-2">
              <div className="salary flex items-center gap-2">
                <PhoneIcon className="w-4 h-4"></PhoneIcon>
                <h1>{displayFeaturedJob.contact_information?.phone}</h1>
              </div>
  
              <div className="salary flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4"></EnvelopeIcon>
                <h1>{displayFeaturedJob.contact_information?.email}</h1>
              </div>
  
              <div className="salary flex items-center gap-2">
                <MapIcon className="w-4 h-4"></MapIcon>
                <h1>{displayFeaturedJob.location}</h1>
              </div>
            </div>
          </div>
          <button onClick={()=>handleApplyNow(displayFeaturedJob.id)} className="my-btn mt-5 w-full">Apply Now</button>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default FeaturedJobsDetails;
  