import React from 'react'

const Parallax = ({url}) => {
  return (
    <div class="">
        <div class={`parallax h-96 bg-[url(${url})] bg-cover bg-fixed bg-no-repeat md:h-80`}>
          <div class="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
            <div class="w-11/12 md:w-1/2">
              <div class="my-3 text-3xl font-bold text-white">
                Apply for Scholarship
              </div>
              <div class="my-2 text-xl font-medium text-white">
                Fall 2019 applications are now open
              </div>
              <div class="text-base text-white">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </div>
            </div>
            <div>
              <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Parallax
// https://media.istockphoto.com/id/818087910/photo/multi-ethnic-group-of-students-studying-outdoors.jpg?s=612x612&w=0&k=20&c=cXO32DQmlBLvTsbqGaJDkaA90hfM-tVlejSDrKmTulY=