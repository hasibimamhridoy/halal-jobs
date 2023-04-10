import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FeaturedJobsDetails = () => {

    const [displayFeaturedJob,setDisplayFeaturedJob] = useState([])
    const featuredJobsSingle = useParams()
    const featuredJobs = useLoaderData()

    useEffect(()=>{

        const clickDetailsFeatured = featuredJobs.find(item => item.id == featuredJobsSingle.feaId)
        setDisplayFeaturedJob(clickDetailsFeatured)

    },[])
console.log(displayFeaturedJob);

    return (
        <div>
            hello
        </div>
    );
};

export default FeaturedJobsDetails;