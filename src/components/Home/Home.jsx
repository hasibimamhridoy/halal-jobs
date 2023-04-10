import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCatagory from "../JobCatagory/JobCatagory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../Header/Banner/Banner";

const Home = () => {

  const [jobCatagory,setJobCatagory] = useState([])
  const [featuredJobs,setFeaturedJobs] = useState([])
  
  useEffect(()=>{

    fetch('jobCatagory.json')
    .then(res =>res.json())
    .then(data => setJobCatagory(data))
  },[])

  useEffect(()=>{

    fetch('featuredJobs.json')
    .then(res =>res.json())
    .then(data => setFeaturedJobs(data))
  },[])


  return (
    <div className="">
      
    <Banner></Banner>
    <JobCatagory jobCatagory={jobCatagory}></JobCatagory>
    <FeaturedJobs featuredJobs = {featuredJobs}></FeaturedJobs>


    </div>
  );
};

export default Home;
