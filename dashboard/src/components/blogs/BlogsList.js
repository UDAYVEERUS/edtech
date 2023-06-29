import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllBlogs } from '../../actions/blog'
import BlogItem from "./BlogItem"
const BlogsList = ({
  blogs_array,
  getAllBlogs
}) => {
  useEffect(() => {
    getAllBlogs()
  }, [])
  
  return (
    <div className='flex flex-wrap'>
      {blogs_array&&blogs_array.map((value,index)=>{
        return  <BlogItem data={value} key={index}/>
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    blogs_array
  }=state.variables 
  return {
    blogs_array
  }
}

const mapActionsToProps = {
  getAllBlogs  
}

export default connect(mapStateToProps,mapActionsToProps)(BlogsList)