import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const setJobLocalStorage = (id) => {
    
    let storedJobs = getJobLocalStorage()
    
    if (!storedJobs) {
        
        storedJobs.push(id)
    }

    else{

      
        if (storedJobs.includes(id)) {
            toast.error('Already Applied!', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }

        else{
            
            storedJobs = [...storedJobs,id]
            toast.success('Succesfully Applied!', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }

    }

    localStorage.setItem('jobs',JSON.stringify(storedJobs))

};


const getJobLocalStorage = () => {
    let appliedJobs = []

    const storedJobs = JSON.parse(localStorage.getItem('jobs'))

    if (storedJobs) {
        appliedJobs = storedJobs
    }

    return appliedJobs

};

export {
    setJobLocalStorage,
    getJobLocalStorage
};