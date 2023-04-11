import { InformationCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A1",
      Marks: 60,
    },
    {
      name: "A2",
      Marks: 60,
    },
    {
      name: "A3",
      Marks: 60,
    },
    {
      name: "A4",
      Marks: 60,
    },
    {
      name: "A5",
      Marks: 60,
    },
    {
      name: "A6",
      Marks: 60,
    },
    {
      name: "A7",
      Marks: 60,
    },
    {
      name: "A8",
      Marks: 60,
    },
  ];

  return (

      <div className="px-2">
      <div className="title my-bg-clr h-52 flex  items-center justify-center">
        <h1 className="my-title">Assignment Marks</h1>
      </div>

      <div className="analytics lg:w-[70%] mb-10 text-white p-5 rounded-md mt-5 lg:mx-auto lg:space-y-3 bg-[#0d0d20]">
        <div className="title flex justify-between">
          <h1 className="text-xl">Assignment Analytics</h1>
          <label htmlFor="my-modal-3" className="btn"><InformationCircleIcon className="w-6 h-6 text-white"></InformationCircleIcon></label>
          
        </div>

        <div className="avgMark flex space-x-3">
          <div className="star bg-[#fff5cb] h-fit p-2 rounded-full">
            <StarIcon className="w-6 h-6 text-[#ffb800]"></StarIcon>
          </div>
          <div className="mark pb-5">
            <h1 className="text-2xl">60.00</h1>
            <h1 className="text-sm">Avg Assignment Mark</h1>
          </div>
        </div>

        <div className="chart  flex items-center justify-center mt-5">
         <ResponsiveContainer width="100%" height={400}>
         <ComposedChart
            width={800}
            height={400}
            data={data}
            
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#000000"  />
            <XAxis   dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Marks" stroke="#4404a6" />
          </ComposedChart>
         </ResponsiveContainer>
        </div>
      </div>


{/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
    <p className="py-4">এসাইন্মেন্ট গুলোর মার্ক & এভারেজ মার্ক দেখানো হয়েছে।</p>
  </div>
</div>

      </div>


 
  );
};

export default Statistics;
