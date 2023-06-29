import React from 'react'

const CarouselItem = () => {
    return (
        <div class="mx-2 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:w-fit">
            <div class="text-2xl font-medium">Lorem, ipsum dolor.</div>
            <p class="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
            </p>
            <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
            </button>
        </div>
    )
}

export default CarouselItem