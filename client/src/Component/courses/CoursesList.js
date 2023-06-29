import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import CourseItem from "./CourseItem"
import { courseFetch } from "../../actions"
import { connect } from 'react-redux';
const CoursesList = ({
    courses_array,

    courseFetch
}) => {
    const data = { title: "UPSC" }
    const [length, setLength] = useState(0)


    useEffect(() => {
        courseFetch()
    }, [])

    useEffect(() => {
        console.log(courses_array, "sraruar");

    }, [courses_array])



    return (
        <div className='w-[60%] mx-auto'>
            <Carousel autoPlay={true} interval={1500} infiniteLoop={true} >
                {courses_array && courses_array.map((value, index) => {


                    return <div className='flex justify-evenly items-center'><CourseItem color={"green"} data={value} />
                        <CourseItem color={"yellow"} data={value} />
                        <CourseItem color={"blue"} data={value} />
                        {/* <CourseItem color={"red"} data={data} /> */}
                    </div>

                })}

            
            </Carousel>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        courses_array
    } = state.variables
    return {
        courses_array
    }
}
const mapActionsToProps = {
    courseFetch
}

export default connect(mapStateToProps, mapActionsToProps)(CoursesList)