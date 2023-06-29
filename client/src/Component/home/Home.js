import React from "react";
import Navbar from "../Navbar";
import Parallax from "../parallax/Parallax";
import Carousel from "./Carousel";
import LatestPosts from "./posts/LatestPosts";
import Events from "./upcomingevents/Events";

const Home = () => {
  return (
    <div>
      {/* <nav className="flex h-fit items-center justify-between bg-white p-4 lg:justify-around">
        <div className="logo font-serif text-xl font-bold tracking-widest text-sky-900">
          EdTech
        </div>
        <div className="hamburger flex cursor-pointer flex-col lg:hidden">
          <div className="line my-1 h-1 w-10 bg-sky-900"></div>
          <div className="line my-1 h-1 w-10 bg-sky-900"></div>
          <div className="line my-1 h-1 w-10 bg-sky-900"></div>
        </div>
        <div className="nav-items hidden w-1/2 items-center justify-between lg:flex">
          <div className="w-fit">
            <ul className="flex">
              <li className="mx-5">Home</li>
              <li className="mx-5">About</li>
              <li className="mx-5">Services</li>
              <li className="mx-5">Courses</li>
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
      </nav> */}
      
      <div>
        <div className="head flex h-[80vh] items-center justify-center bg-[url('https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop')] bg-cover">
          {/* <!-- <div className="bigCard">
    <div className="h-full bg-black  duration-200 ease-linear"></div>
  </div> --> */}
          <div className="smallCard flex flex-col items-center">
            <p className="text-center text-6xl font-bold text-white">
              Better Education For A <br />
              Better World
            </p>
            <br />
            <button className="mt-5 rounded-lg bg-yellow-400 p-2 px-5 text-neutral-800">
              Read More
            </button>
          </div>
        </div>

        <div>
          {/* <div className="relative bottom-14 flex flex-col items-center justify-center md:flex-row">
            <div className="mx-2 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:w-96">
              <div className="text-2xl font-medium">Lorem, ipsum dolor.</div>
              <p className="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
              </p>
              <button className="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
              </button>
            </div>
            <div className="mx-2 my-5 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:my-0 md:w-96">
              <div className="text-2xl font-medium">Lorem, ipsum dolor.</div>
              <p className="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
              </p>
              <button className="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
              </button>
            </div>
            <div className="mx-2 my-5 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:my-0 md:w-96">
              <div className="text-2xl font-medium">Lorem, ipsum dolor.</div>
              <p className="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
              </p>
              <button className="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
              </button>
            </div>
          </div> */}
          <Carousel/>
        </div>
      </div>
 
      <div className="first mx-auto flex w-11/12 flex-col items-center justify-center py-32 lg:w-4/6 lg:flex-row">
        <div className="left my-2">
          <div className="content my-5">
            <h1 className="campus my-6 text-4xl font-semibold">
              Welcome To Our Campus
            </h1>
            <p className="para text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aut
              nihil eveniet deleniti tempora, consectetur natus ipsa corrupti
              culpa eos amet incidunt optio aliquam distinctio pariatur aperiam!
              Quam, odit libero dolores debitis aperiam beatae cupiditate quos
              eos a fugiat corporis?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              higit p laborum?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Recusandae asperiores reprehenderit officia elig
              autem asperiores?
            </p>
            <button className="mt-4 w-fit rounded-md bg-yellow-400 p-1 px-8 py-3 text-sm text-neutral-800">
              Read More
            </button>
          </div>
        </div>
        <div className="right flex w-full justify-center">
          <div className="pic">
            <img
              src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="parallax h-96 bg-[url('https://media.istockphoto.com/id/818087910/photo/multi-ethnic-group-of-students-studying-outdoors.jpg?s=612x612&w=0&k=20&c=cXO32DQmlBLvTsbqGaJDkaA90hfM-tVlejSDrKmTulY=')] bg-cover bg-fixed bg-no-repeat md:h-80">
          <div className="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
            <div className="w-11/12 md:w-1/2">
              <div className="my-3 text-3xl font-bold text-white">
                Apply for Scholarship
              </div>
              <div className="my-2 text-xl font-medium text-white">
                Fall 2019 applications are now open
              </div>
              <div className="text-base text-white">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </div>
            </div>
            <div>
              <button className="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <Parallax/>
      <div className="my-20">
        <div className="find-your-course mx-auto flex flex-col items-center justify-evenly lg:flex-row">
          <div className="find mx-20 w-96 justify-evenly bg-slate-50 pb-5">
            <div className="form m-3 my-5 text-center lg:text-left ">
              <h1 className="head my-6 pt-7 text-2xl font-bold">
                Find Your Course
              </h1>

              <p className="para my-6 text-lg">
                Fill in below form to find your courses
              </p>
            </div>
            <div className="form1 mx-6 text-center lg:text-left">
              <input
                type="text"
                className="input-form box-border h-11 w-72 rounded-md bg-slate-200 px-5 py-7"
                placeholder="Course name"
              />
              <br />
              <input
                type="text"
                className="input2 my-10 h-11 w-72 rounded-md bg-slate-200 py-7 px-5"
                placeholder="Category"
              />
              <br />
              <button className="btn w-72 rounded-md bg-yellow-600 py-4 text-center text-xl font-semibold">
                Submit
              </button>
            </div>
          </div>

          <div className="course mx-auto flex w-full flex-col items-center lg:w-fit">
            <div className="first-div mx-28 flex w-full flex-wrap justify-evenly">
              <div className="one my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">Social</h1>
              </div>
              <div className="one w my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">business</h1>
              </div>
              <div className="one my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">web dev</h1>
              </div>
              <div className="one my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">science</h1>
              </div>
            </div>

            <div className="second-div flex w-full flex-wrap justify-evenly">
              <div className="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">Social</h1>
              </div>
              <div className="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">business</h1>
              </div>
              <div className="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">web dev</h1>
              </div>
              <div className="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 className="pros pt-20 text-center">science</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="student flex w-full flex-wrap justify-evenly bg-slate-400 p-10">
        <div className="count my-5 flex">
          <h1 className="num mx-4 text-5xl font-black">60</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
        <div className="count my-5 flex">
          <h1 className="num mx-4 text-5xl font-black">18</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
        <div className="count my-5 flex">
          <h1 className="num mx-4 text-5xl font-black">34</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
        <div className="count my-5 flex">
          <h1 className="num mx-4 text-5xl font-black">20</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
      </div>
      <div className="parallax h-96 bg-[url('https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ')] bg-fixed bg-top bg-no-repeat md:h-80">
        <div className="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
          <div className="w-11/12 md:w-1/2">
            <div className="my-3 text-3xl font-bold text-white">
              Apply for Scholarship
            </div>
            <div className="my-2 text-xl font-medium text-white">
              Fall 2019 applications are now open
            </div>
            <div className="text-base text-white">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </div>
          </div>
          <div>
            <button className="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="my-10 justify-evenly bg-gray-100 p-5  lg:flex ">
        <div className="posts p-5 lg:w-[35%] ">
          <div className="text-3xl font-bold">Latest Posts</div>
          {/* <div className="my-10 flex flex-col bg-white">
            <div className="post-card items-center border-b-2 py-10 lg:flex lg:w-2/3">
              <div className="post-image lg:mr-10">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                  alt=""
                />
              </div>
              <div className="post-desc text-base">
                <div className="text-lg font-semibold">Lorem, ipsum dolor.</div>
                <div className="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, in!
                </p>
              </div>
            </div>
            <div className="post-card items-center border-b-2 py-10 lg:flex lg:w-2/3">
              <div className="post-image lg:mr-10">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                  alt=""
                />
              </div>
              <div className="post-desc">
                <div className="text-2xl font-semibold">Lorem, ipsum dolor.</div>
                <div className="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, in!
                </p>
              </div>
            </div>
            <div className="post-card items-center py-10 lg:flex lg:w-2/3">
              <div className="post-image lg:mr-10">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                  alt=""
                />
              </div>
              <div className="post-desc">
                <div className="text-2xl font-semibold">Lorem, ipsum dolor.</div>
                <div className="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, in!
                </p>
              </div>
            </div>
            <button className="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
              Read More
            </button>
          </div> */}
          <LatestPosts/>
        </div>

        <div className="upcoming-events my-5 lg:w-[35%]">
          <div className="text-3xl font-bold">Upcoming Events</div>
          {/* <div className="events my-10">
            <div className="event mb-10 bg-white lg:flex">
              <div className="time mb-6 flex flex-col justify-center lg:w-44">
                <div className="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                  24 Jan
                </div>
                <div className="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                  2020
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="my-4 text-2xl font-medium lg:text-xl">
                  Lorem ipsum dolor sit.
                </div>
                <p className="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione accusantium maxime autem nihil ullam cum voluptates
                  vitae quam quasi quas commodi, porro saepe, sunt numquam
                  dignissimos eaque dolorum nobis atque?
                </p>
              </div>
            </div>

            <div className="event mb-10 bg-white lg:flex">
              <div className="time mb-6 flex flex-col justify-center lg:w-44">
                <div className="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                  24 Jan
                </div>
                <div className="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                  2020
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="my-4 text-2xl font-medium lg:text-xl">
                  Lorem ipsum dolor sit.
                </div>
                <p className="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione accusantium maxime autem nihil ullam cum voluptates
                  vitae quam quasi quas commodi, porro saepe, sunt numquam
                  dignissimos eaque dolorum nobis atque?
                </p>
              </div>
            </div>
            <div className="event mb-10 bg-white lg:flex">
              <div className="time mb-6 flex flex-col justify-center lg:w-44">
                <div className="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                  24 Jan
                </div>
                <div className="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                  2020
                </div>
              </div>
              <div className="md:w-3/4">
                <div className="my-4 text-2xl font-medium lg:text-xl">
                  Lorem ipsum dolor sit.
                </div>
                <p className="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione accusantium maxime autem nihil ullam cum voluptates
                  vitae quam quasi quas commodi, porro saepe, sunt numquam
                  dignissimos eaque dolorum nobis atque?
                </p>
              </div>
            </div>

            <button className="float-right mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
              Read More
            </button>
          </div> */}.
          <Events/>
        </div>
      </div>
    </div>
  );
};

export default Home;
