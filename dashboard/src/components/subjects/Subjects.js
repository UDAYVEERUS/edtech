import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCourses, getSubjects } from '../../actions'
import { changeVariable } from '../../actions/variables'
import AddSubjectModal from './AddSubjectModal'
import SubjectItem from './SubjectItem'
import UpdateSubjectModal from './UpdateSubjectModal'

const Subjects = ({
    courses_array,
    subjects_array,

    getCourses,
    getSubjects,
    changeVariable
}) => {

    const [course, setCourse] = useState()
    
    useEffect(() => {
        getCourses()
    }, [])

    useEffect(() => {
        if (course) {
            getSubjects(course)
            console.log(course,"check alue")
        }
    }, [course])


    return (
        <>
            <select value={course} onChange={(e) => { setCourse(e.target.value) }} className="w-52 rounded-md border bg-slate-100" name="course" placeholder='find' id="">

                {courses_array && courses_array.map((data, index) => {
                    return <option key={index} value={data._id}>{data.name}</option>
                })}

            </select>
                <div className='flex'>
            {subjects_array&&subjects_array.map((value,index)=>{
                return <SubjectItem data={value} key={index} />
            })}</div>


            {course&&<div onClick={()=>{changeVariable("modal_add_subject",true)}}><button className='px-4 py-2 text-lg bg-gray-800 text-white rounded-lg'>Add Subject</button></div>}
            <AddSubjectModal course_id={course} />
            <UpdateSubjectModal/>
        </>
    )
}


const mapStateToProps = (state) => {
    const {
        courses_array,
        subjects_array
    } = state.variables
    return {
        courses_array,
        subjects_array
    }
}


const mapActionsToProps = {
    getCourses,
    getSubjects,
    changeVariable
}
export default connect(mapStateToProps, mapActionsToProps)(Subjects)