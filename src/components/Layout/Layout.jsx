import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { setJobLocalStorage, getJobLocalStorage } from "../Utilities/Utilities";

const Layout = () => {
  const [featuredJobs, setFeaturedJobs] = useState();
  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  const [applyJob, setApplyJob] = useState([]);

  const [filterValue, setFilterValue] = useState([]);
  const [isFilter,setIsfilter] = useState(false)

  const handleApplyNow = (id) => {
    setJobLocalStorage(id);
    const getStoredItem = getJobLocalStorage();

    console.log(getStoredItem);

    const pushItem = [];

    for (const id of getStoredItem) {
      if (featuredJobs) {
        const findItem = featuredJobs.find((fItem) => fItem.id == id);
        pushItem.push(findItem);
      }
    }

    setApplyJob(pushItem);
  };

  useEffect(() => {
    const getStoredItem = getJobLocalStorage();
    const pushItem = [];

    for (const id of getStoredItem) {
      if (featuredJobs) {
        const findItem = featuredJobs.find((fItem) => fItem.id == id);
        pushItem.push(findItem);
      }
    }

    setApplyJob(pushItem);
   
  }, [featuredJobs]);



  const filterbyTime = (value) => {
    const jobs = [...applyJob];
    const newFilter = jobs.filter((job) => job.remote_or_onsite === value);

    console.log(value);
    if (value.toLowerCase() === 'show all') {
      return setFilterValue(jobs)
      console.log('working');
    }

  
   
    setFilterValue(newFilter);
    setIsfilter(true)
   
  };

 
  console.log(filterValue);

  return (
    <div className="border border-red-400 my-container">
      <div className="navbarContainer my-bg-clr ">
        <Navbar></Navbar>
      </div>

      <div className="outlet ">
        <Outlet
          context={[handleApplyNow, applyJob, filterbyTime,filterValue,setIsfilter,isFilter]}
        ></Outlet>
      </div>
    </div>
  );
};

export default Layout;
