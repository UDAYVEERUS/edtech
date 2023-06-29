import React from 'react'
import Parallax from '../parallax/Parallax'
import BlogList from './left/BlogList'

const Blog = () => {
  return (
    <div className="overflow-x-hidden relative">

      <Parallax url={"https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ"} />

      <div className="blog-services mt-11 w-screen  justify-evenly p-9 px-2 lg:flex ">
        <BlogList />

        <div className="right-blog mt-12 lg:mt-16 lg:w-4/12 sticky top-0 right-0">
          <div className="B1 rounded-sm border pt-6 pb-6">
            <h1 className="mx-8 text-4xl font-bold">Search</h1>
            <input className="mx-9 mt-4 h-16 w-10/12 rounded-md bg-slate-200 p-6 font-mono text-xl" type="text" placeholder="Search here" required />
          </div>
          <div className="B1 mt-12 border pt-8 pb-5">
            <h1 className="mx-8 text-4xl font-bold">All Categories</h1>
            <ul className="mx-8 pt-8 text-xl text-gray-500">
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> All</li>
              <hr />
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> Web design</li>
              <hr />
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> Graphic design</li>
              <hr />
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> Web developemnt</li>
              <hr />
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> Marketing</li>
              <hr />
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> Security</li>
              <hr />
              <li className="h-16 cursor-pointer py-4 hover:text-amber-400"> Bug fixing</li>
            </ul>
          </div>
          <div className="B1 mt-12 rounded-sm border px-7 pt-8 pb-10">
            <h1 className="text-4xl font-bold">Recent post</h1>
            <div className="third mt-7 flex">
              <img className="w-40 cursor-pointer rounded-md" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g1.jpg" alt="" />
              <div className="my-4">
                <h1 className="mx-11 cursor-pointer text-lg font-semibold hover:text-amber-400">dolor sit ur adip</h1>
                <h1 className="mx-11 text-justify">11 min ago</h1>
              </div>
            </div>
            <div className="third mt-7 flex">
              <img className="w-40 cursor-pointer rounded-md" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g1.jpg" alt="" />
              <div className="my-4">
                <h1 className="mx-11 cursor-pointer text-lg font-semibold hover:text-amber-400">dolor sit ur adip</h1>
                <h1 className="mx-11 text-justify">11 min ago</h1>
              </div>
            </div>
            <div className="third mt-7 flex">
              <img className="w-40 cursor-pointer rounded-md" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g1.jpg" alt="" />
              <div className="my-4">
                <h1 className="mx-11 cursor-pointer text-lg font-semibold hover:text-amber-400">dolor sit ur adip</h1>
                <h1 className="mx-11 text-justify">11 min ago</h1>
              </div>
            </div>
          </div>
          <div className="B1 mt-12 rounded-sm border px-7 pt-8 pb-10">
            <h1 className="text-4xl font-bold">Instagram post</h1>
            <div className="tri mt-8 flex cursor-pointer justify-around">
              <img className="w-32 rounded-2xl p-1" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
              <img className="w-32 rounded-2xl p-1" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
              <img className="w-32 rounded-2xl p-1" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
            </div>

            <div className="tri flex cursor-pointer justify-around">
              <img className="w-32 rounded-2xl p-1" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
              <img className="w-32 rounded-2xl p-1" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
              <img className="w-32 rounded-2xl p-1" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
            </div>
          </div>
          <div className="B1 mt-12 rounded-sm border px-7 pt-8 pb-10">
            <h1 className="text-4xl font-bold">Popular Tags</h1>
            <ul>
              <button className="mt-7 h-16 w-40 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">web design</button>
              <button className="mt-7 h-16 w-52 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">web development</button>
              <button className="mt-7 h-16 w-48 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">graphic design</button>
              <button className="mt-7 h-16 w-44 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">Marketing</button>
              <button className="mt-7 h-16 w-24 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">CSS</button>
              <button className="mt-7 h-16 w-36 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">wordpress</button>
              <button className="mt-7 h-16 w-32 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">PHP</button>
              <button className="mt-7 h-16 w-44 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">javascript</button>
              <button className="mt-7 h-16 w-48 cursor-pointer rounded-lg border-2 border-black bg-slate-50 text-xl font-medium hover:bg-amber-400">HTML</button>
            </ul>
          </div>
          <div className="B1 mt-12 border px-7 pt-8 pb-10">
            <h1 className="text-4xl font-bold">Advertisement</h1>
            <img className="cursor-pointer rounded-sm pt-10" src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog