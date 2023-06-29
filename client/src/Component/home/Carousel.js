import React from 'react'
import CarouselItem from './CarouselItem'

const Carousel = () => {
  return (
    <div className="lg:w-[80%] mx-auto relative bottom-14 flex flex-col items-center justify-center md:flex-row">
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
    </div>
  )
}

export default Carousel