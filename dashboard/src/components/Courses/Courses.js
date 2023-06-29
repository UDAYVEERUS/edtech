import React from 'react'
import { connect } from 'react-redux'
import { changeVariable } from '../../actions/variables'
import CourseList from "./CoursesList"
import AddCourseModal from "./AddCourseModal"
import UpdateCourseModal from './UpdateCourseModal'
const Courses = ({
  changeVariable
}) => {
  return (
    <div className='flex flex-col '>
      <div className="mt-10">
        <button className="rounded-lg bg-slate-800 text-white hover:bg-sky-900 p-2 text-base" onClick={() => { changeVariable("modal_add_course", true) }}>Add New Course</button>
      </div>
      <div className='my-22'><CourseList /></div>
      <AddCourseModal />
      <UpdateCourseModal/>
    </div>
  )
}


const mapStateToProps = (state) => {
  const {

  }=state.variables 
  return {
    
  }
}

const mapActionsToProps = {
  changeVariable
}
export default connect(mapStateToProps,mapActionsToProps) (Courses)