import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCourses, hideModal } from '../../actions'
import CourseItem from "./CourseItem"
const CoursesList = ({
  courses_array,
  
  hideModal,
  getCourses
}) => {
  useEffect(() => {
    getCourses()
  }, [])
  
  return (
    <div className='flex flex-wrap'>
      {courses_array&&courses_array.map((value,index)=>{
        return <CourseItem data={value} key={index} />
      })}
      
    </div>
  )
}

const mapStateToProps = (state)=>{
  const {
    courses_array
  }=state.variables 
  return {
    courses_array
  }
}

const mapActionsToProps = {
  // modal_course_name:"", 
  hideModal ,
  getCourses
}

export default connect(mapStateToProps,mapActionsToProps)(CoursesList)