import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";



const DropDownNavbar = ({ display }) => {
  const {pathname}=useLocation()
  
  const [path, setPath] = useState()
  useEffect(() => {
    setPath(pathname)
  }, [pathname])
  
  
  return (
    <div class={`${display ? "" : "hidden"} w-screen md:hidden md:w-auto`} id="navbar-default">
      <ul class="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  ">
        <li>
          <Link to={"/"} class={`block py-2 pl-3 pr-4  ${path==="/"?"bg-blue-700 text-white":""} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-400`} aria-current="page">Home</Link>
        </li>
        <li>
          <Link to={"/about"} class={`block py-2 pl-3 pr-4 ${path==="/about"?"bg-blue-700 text-white":""}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</Link>
        </li>
        <li>
          <Link to={"/service"} class={`block py-2 pl-3 pr-4 ${path==="/service"?"bg-blue-700 text-white":""}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Service</Link>
        </li>
        <li>
          <Link to={"/courses"} class={`block py-2 pl-3 pr-4 ${path==="/course"?"bg-blue-700 text-white":""}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Course</Link>
        </li>
        <li>
          <Link to={"/register"} class={`block py-2 pl-3 pr-4 ${path==="/register"?"bg-blue-700 text-white":""}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Register</Link>
        </li>
      </ul>
    </div>)
}



const Navbar = () => {


  const [display, setDisplay] = useState(false)

  return (
    <>
      <nav className=" top-0 sticky z-10 shadow-xl relative flex-col lg:flex-row flex h-fit items-center justify-between bg-white p-4 lg:justify-around">

        <div className="flex justify-between w-screen lg:w-fit px-2">
          <div className="logo font-serif text-xl font-bold tracking-widest text-sky-900">
            EdTech
          </div>
          {!display &&
            <div className="hamburger flex cursor-pointer flex-col lg:hidden" onClick={() => { setDisplay(true) }}>
              <div className="line my-1 h-1 w-10 bg-sky-900"></div>
              <div className="line my-1 h-1 w-10 bg-sky-900"></div>
              <div className="line my-1 h-1 w-10 bg-sky-900"></div>
            </div>}
          {display && <div className="text-2xl font-bold " onClick={()=>{setDisplay(false)}}>
            X
          </div>}
        </div>
        <div className="nav-items hidden w-1/2 items-center justify-between lg:flex">
          <div className="w-fit">
            <ul className="flex">
              <Link to={"/home"} className="cursor-pointer"><li className="mx-5">Home</li></Link>
              <Link to={"/about"} className="cursor-pointer"><li className="mx-5">About</li></Link>
              <Link to={"/services"} className="cursor-pointer"><li className="mx-5">Services</li></Link>
              <Link to={"/courses"} className="cursor-pointer"><li className="mx-5">Courses</li></Link>
              <Link to={"/register"} className="cursor-pointer"><li className="mx-5">Sign up</li></Link>
            </ul>
          </div>
          <div className="search w-fit">
            <div className="searchbar rounded border border-sky-900 py-2 px-5">
              <input
                type="search"
                name=""
                id=""
                className=""
                placeholder="Search.."
              />
            </div>
          </div>
        </div>
        <DropDownNavbar display={display} />
      </nav>
    </>
  );
};

export default Navbar;

