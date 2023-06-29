import React from 'react'

const Event = () => {
    return (
        <div class="event mb-10 bg-white lg:flex py-4">
            <div class="time mb-6 flex flex-col justify-center lg:w-44 lg:items-center">
                <div class="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                    24 Jan
                </div>
                <div class="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                    2020
                </div>
            </div>
            <div class="md:w-3/4">
                <div class="my-4 text-2xl font-medium lg:text-xl">
                    Lorem ipsum dolor sit.
                </div>
                <p class="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione accusantium maxime autem nihil ullam cum voluptates
                    vitae quam quasi quas commodi, porro saepe, sunt numquam
                    dignissimos eaque dolorum nobis atque?
                </p>
            </div>
        </div>
    )
}

export default Event