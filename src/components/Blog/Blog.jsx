import React, { useEffect, useState } from "react";

const Blog = () => {

    const [blog,setBlog] = useState([])
 

    useEffect(()=>{
  
      fetch('blog.json')
      .then(res =>res.json())
      .then(data => setBlog(data))
    },[])

  return (
    <div>
      <div className="title my-bg-clr h-52 flex  items-center justify-center">
        <h1 className="my-title">Blog</h1>
      </div>

<div className="lg:space-y-8 space-y-4 lg:mx-0 mx-3">

{blog.map(blg =>{
    return(
        <div key={blg.id} className="card lg:w-[60%] w-full  lg:mx-auto lg:card-side bg-base-100 shadow-xl">
        
        <div className="card-body lg:w-[65%] w-full">
          
          <img className="rounded-lg"
            src={blg.img}
            alt=""
          />

          <h2 className="card-title">{blg.question}</h2>
          <p>
            {blg.answer}
          </p>
        </div>
      </div>
    )
})}

</div>
      
    </div>
  );
};

export default Blog;
