import React from 'react'
import Parallax from '../parallax/Parallax'
import CoursesList from './CoursesList'

const Courses = () => {
  return (
    <div className='my-24'>
        <div className='carousel'>
            <CoursesList/>
        </div>
        <Parallax url={"https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ"} />
    </div>
  )
}

export default Courses