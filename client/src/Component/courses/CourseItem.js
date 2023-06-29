import React from 'react'
import { Link } from 'react-router-dom'

const CourseItem = ({data,color}) => {
  const {
    name,_id
  }=data
  return (
    <Link to={`/course/${_id}`}>
    <div class={`bg-${color}-200 border-t-8 h-52 w-60 border border-${color}-500 flex flex-col items-center justify-evenly`}>
      <div className="text-black font-bold text-lg ">{name}</div>
      <div>
        <button className="bg-white p-2 px-5 rounded-lg " >View Syllabus</button>
      </div>
    </div>
    </Link>
  )
}

export default CourseItem