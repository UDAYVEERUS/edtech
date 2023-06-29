import React from 'react'
import Navbar from '../Navbar'
import Parallax from '../parallax/Parallax'

const About = () => {
  return (
    <div>
      <Parallax url={"https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ"} />
      <div className="about-heading p-8">
        <div className="about-our-institution justify-evenly lg:flex lg:h-screen  items-center">
          <div className="data max-w-lg">
            <h1 className="text text-4xl font-bold">About Our Institution</h1>
            <p className="pros my-10 items-center whitespace-pre-line font-serif text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, excepturi cum repellat quibusdam impedit suscipit aliquam ducimus ipsa repellendus animi repudiandae vero optio illum libero eligendi! Iure omnis et facilis odio minus? Quasi, distinctio est recusandae pariatur in voluptates dignissimos?</p>
            <ul className="stud mx-10 font-serif leading-10 text-neutral-600">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing el.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            </ul>
          </div>
          <div className="pic mx-auto max-w-lg pt-16 lg:m-0 lg:pt-8">
            <img src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
          </div>
        </div>

        <div className="info mx-auto w-full pt-11 lg:flex lg:pb-24 ">
          <div className="info-tech lg:ml-36">
            <h1 className="subtitle text-4xl font-bold">Our History 1222</h1>
            <p className="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
          </div>
          <div className="info-tech">
            <h1 className="subtitle text-4xl font-bold">Our History 1222</h1>
            <p className="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
          </div>
          <div className="info-tech lg:mr-28">
            <h1 className="subtitle text-4xl font-bold">Our History 1222</h1>
            <p className="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
          </div>
        </div>
      </div>

      <div className="choosing-institution bg-slate-100">
        <div className="institution text-center">
          <h1 className="head md: p-11 text-4xl font-semibold">Why Choose Our Institution</h1>
          <p className="tail px-5 text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed et necessitatibus ipsam sunt temporibus aspernatur voluptatem ad, <br />
            recusandae perspiciatis, consectetur dolorem possimus quaerat ab architecto deleniti, est vel aut.
          </p>
        </div>
        <div className="icon flex flex-col items-center lg:mx-24 lg:flex-row">
          <div className="icon-item flex w-11/12 flex-col items-center py-16 text-center">
            <div className="rounded-full bg-yellow-400 p-5">
              <img className="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
            </div>
            <div className="item my-10">
              <h2 className="one text-2xl font-bold">lorem 1</h2>
              <br />
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
            </div>
          </div>
          <div className="icon-item flex w-11/12 flex-col items-center py-16 text-center">
            <div className="rounded-full bg-yellow-400 p-5">
              <img className="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
            </div>
            <div className="item my-10">
              <h2 className="one text-2xl font-bold">lorem 1</h2>
              <br />
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
            </div>
          </div>
          <div className="icon-item flex w-11/12 flex-col items-center py-16 text-center">
            <div className="rounded-full bg-yellow-400 p-5">
              <img className="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
            </div>
            <div className="item my-10">
              <h2 className="one text-2xl font-bold">lorem 1</h2>
              <br />
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
            </div>
          </div>
          <div className="icon-item flex w-11/12 flex-col items-center py-16 text-center">
            <div className="rounded-full bg-yellow-400 p-5">
              <img className="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
            </div>
            <div className="item my-10">
              <h2 className="one text-2xl font-bold">lorem 1</h2>
              <br />
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


