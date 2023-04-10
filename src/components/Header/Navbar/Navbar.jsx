import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar my-container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                <li>
                <a>Home</a>
              </li>
              </NavLink>
              
              
              

              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                <li tabIndex={0}>
                <a className="justify-between">Statistics</a>
              </li>
              </NavLink>

              <NavLink
                to="/appliedJobs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                <li>
                <a>Applied Jobs</a>
              </li>
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                 <li>
              <a>Blog</a>
            </li>
              </NavLink>



              
            </ul>
          </div>
          <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
              
                 <a className="p-0 m-0 text-xl cursor-pointer">Halal Jobs</a>
            
              </NavLink>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                <li>
                <a>Home</a>
              </li>
              </NavLink>



              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                <li tabIndex={0}>
                <a className="justify-between">Statistics</a>
              </li>
              </NavLink>


            <NavLink
                to="/appliedJobs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                <li>
                <a>Applied Jobs</a>
              </li>
              </NavLink>


            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
                 <li>
              <a>Blog</a>
            </li>
              </NavLink>
            

            
            
            
           
          </ul>
        </div>
        <div className="navbar-end mt-2">
        <NavLink
                to="/appliedJobs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "my-active-clr" : ""
                }
              >
               
                <a className="my-btn">Start Applying</a>
             
              </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
