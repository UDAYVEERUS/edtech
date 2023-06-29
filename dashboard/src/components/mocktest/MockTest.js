import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getCourses, getMockTest, getMockTestBycourse, getMockTestBySubCourse, getSubjects } from '../../actions'
import { changeVariable } from '../../actions/variables'
import AddQuestionModal from './AddQuestionModal'

import MockTestList from './MockTestList'

const MockTest = ({
    courses_array,
    mocktest_array,
    subjects_array,
    
    getCourses,
    getMockTest,
    getMockTestBycourse,
    getMockTestBySubCourse,
    changeVariable,
    getSubjects
}) => {
    const { id,subject_id } = useParams()
    const navigate = useNavigate()
    const [course, setCourse] = useState(id)
    const [subject,setSubject] = useState(subject_id)
    useEffect(() => {
        getCourses()
        console.log(course, "hereis coursse")
    }, [])


    useEffect(() => {
        if (course) {
            navigate(`/mocktest/${course}`, { replace: true })
        }
    }, [course])

    useEffect(() => {
        getMockTestBycourse(id)
        getSubjects(id)
        if(subject){
            getMockTestBySubCourse(id,subject)
        }
    }, [id])

    useEffect(() => {
      if(course){
        console.log(subject,"erkmjn")
        navigate(`/mocktest/${course}/${subject}`, { replace: true })
        getMockTestBySubCourse(id,subject)
      }
    }, [subject])
    



    if (!id) {
        return (
            <>
                <div className='w-full'>
                    <div className="">Mock Test</div>

                    <div className="mt-10">
                        <button className="rounded-lg bg-slate-800 text-white hover:bg-sky-900 p-2 text-base" onClick={() => { changeVariable("modal_add_question", true) }}>Add New Question</button>
                    </div>
                    <div className="my-5 flex w-full rounded-lg bg-white py-3">
                        <div className="flex w-4/12 justify-between px-14">
                            <div className="text-2xl tracking-wide flex">Filter</div>
                            <select value={course} onChange={(e) => { setCourse(e.target.value) }} className="w-52 rounded-md border bg-slate-100" name="course" placeholder='find' id="">
                                {courses_array && courses_array.map((data, index) => {
                                    return <option key={index} value={data._id}>{data.name}</option>
                                })}

                            </select>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {

        return (
            <div className='w-full'>
                <div className="">Mock Test</div>

                <div className="mt-10">
                    <button className="rounded-lg bg-slate-800 text-white hover:bg-sky-900 p-2 text-base" onClick={() => { changeVariable("modal_add_question", true) }}>Add New Question</button>
                </div>
                <div className="my-5 flex w-full rounded-lg bg-white py-3">
                    <div className="flex w-4/12 justify-between px-14">
                        <div className="text-2xl tracking-wide flex">Filter</div>
                        <select value={course} onChange={(e) => { setCourse(e.target.value) }} className="w-52 rounded-md border bg-slate-100" name="course" placeholder='find' id="">
                            {courses_array && courses_array.map((data, index) => {
                                return <option key={index} value={data._id}>{data.name}</option>
                            })}

                        </select>
                        { id &&
                            <select value={subject} onChange={(e) => { setSubject(e.target.value) }} className="w-52 rounded-md border bg-slate-100" name="subject" placeholder='find' id="">
                                {subjects_array && subjects_array.map((data, index) => {
                                    return <option key={index} value={data._id}>{data.name}</option>
                                })}

                            </select>
                            }
                    </div>
                </div>
                <div className="rounded-xl bg-white py-10">
                    <MockTestList mocktest_array={mocktest_array} course={course} />
                </div>

                <AddQuestionModal />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        courses_array,
        mocktest_array,
        subjects_array,
    } = state.variables
    return {
        courses_array, mocktest_array,
        subjects_array,
    }
}

const mapActionsToProps = {
    getCourses, getMockTest, getMockTestBycourse,getMockTestBySubCourse, changeVariable,getSubjects
    
}
export default connect(mapStateToProps, mapActionsToProps)(MockTest)