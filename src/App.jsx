
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJobs/AppliedJob';
import Blog from './components/Blog/Blog';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import FeaturedJobsDetails from './components/FeaturedJobsDetails/FeaturedJobsDetails';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      loader:()=>fetch('featuredJobs.json'),
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('featuredJobs.json')
        },
        {
          path:'/featuredJobs/:feaId',
          element:<FeaturedJobsDetails></FeaturedJobsDetails>,
          loader:({params})=>fetch('/featuredJobs.json')
        },
        
        {
          path:'/statistics',
          element:<Statistics></Statistics>,
        },
        {
          path:'/appliedJobs',
          element:<AppliedJob></AppliedJob>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>,
        },
      ]
    }
  ])
  
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
     <ToastContainer />
    </div>
  )
}

export default App
