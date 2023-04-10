import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { setJobLocalStorage, getJobLocalStorage } from "../Utilities/Utilities";

const Layout = () => {

    
  const [featuredJobs,setFeaturedJobs] = useState()
  useEffect(()=>{

    fetch('/featuredJobs.json')
    .then(res =>res.json())
    .then(data => setFeaturedJobs(data))
  },[])
 

  const [applyJob, setApplyJob] = useState([]);


  const handleApplyNow = (id) => {
    setJobLocalStorage(id);
    const getStoredItem = getJobLocalStorage()

    console.log(getStoredItem);

    const pushItem = []

    for (const id of getStoredItem) {

        if (featuredJobs) {
            const findItem = featuredJobs.find(fItem => fItem.id == id)
        pushItem.push(findItem)
        }
    }

    setApplyJob(pushItem)

  };

  useEffect(()=>{

    const getStoredItem = getJobLocalStorage()

    console.log(getStoredItem);

    const pushItem = []

    for (const id of getStoredItem) {

        if (featuredJobs) {
            const findItem = featuredJobs.find(fItem => fItem.id == id)
        pushItem.push(findItem)
        }
    }

    setApplyJob(pushItem)

  },[featuredJobs])



  



  return (
    <div className="border border-red-400 my-container">
      <div className="navbarContainer my-bg-clr ">
        <Navbar></Navbar>
      </div>

      <div className="outlet ">
        <Outlet context={[handleApplyNow,applyJob]}></Outlet>
      </div>
    </div>
  );
};

export default Layout;
