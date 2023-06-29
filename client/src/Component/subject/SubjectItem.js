import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {DownloadIcon} from "@chakra-ui/icons"
import { connect } from 'react-redux'
const SubjectItem = ({
    data,
    course_id,
    mocktest_array,
}) => {
    const {_id,image,name,description,updated_at,created_at,content}=data

    const [date, setDate] = useState()

    useEffect(() => {
      let d = new Date(updated_at)
    //   console.log(d,typeof d ,"rkdfg",String(d),typeof (String(d))) 
      setDate(String(d).split(" "))
    }, [])
    
    
    return (
        <div className="one-blog max-w-3xl border-x-2 border-y-2 lg:ml-4 my-10 mx-2 lg:mx-0">
            <div className={`img-pic lg:h-96 h-72 flex items-end bg-[url(${image})] bg-contain`}>
                {/* <!-- <img src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/blog-1.jpg" alt="" /> --> */}
                
                {date&&<div className="blog-post ">
                    
                    <h1 className="h-16 w-32 lg:w-40 bg-blue-700 px-4 py-3 text-2xl lg:text-3xl font-semibold text-white">{date[2] } {date[1]}</h1>
                    <h1 className="h-16 w-32 lg:w-40 bg-amber-400 px-7 py-3 text-2xl lg:text-3xl font-semibold">{date[3]}</h1>
                </div>}
            </div>
            <div className="blog-content m-5 lg:mx-11">
                <h5 className="text-3xl font-semibold">{name}</h5>
                <br />
                <hr />
                <p className="m-1 lg:mt-14 lg:text-2xl text-lg text-gray-400 lg:w-9/12">{description + "...."}</p>
                <div className='flex justify-evenly'>
                <Link to={content} target="_blank"><button className="mx-1 mt-7 lg:h-16 lg:w-72 py-2 px-4 lg:p-0 rounded-lg bg-amber-400 lg:text-xl text-md font-medium">Download Syllabus  </button></Link>
                <Link to={`/${course_id}/mocktest/${_id}`}><button className="mx-1 mt-7 lg:h-16 py-2 px-4 lg:p-0 lg:w-72 rounded-lg  bg-blue-700 text-white lg:text-xl text-md font-medium">Give MockTest</button></Link>
                </div>
            </div>
        </div> 
    )
}

const mapStateToProps = (state)=>{
    const {
        mocktest_array
    }=state.variables
    return {
        mocktest_array
    }
}

const mapActionsToProps = {
      
}

export default connect(mapStateToProps,mapActionsToProps)(SubjectItem)