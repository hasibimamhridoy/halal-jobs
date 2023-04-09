
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

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('jobCatagory.json')
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>,
        },
        {
          path:'/appliedJobs/:jobId',
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
    </div>
  )
}

export default App
