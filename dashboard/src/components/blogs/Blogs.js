import React from 'react'
import { connect } from 'react-redux'
import { changeVariable } from '../../actions/variables'
import AddBlogModal from './AddBlogModal'
import BlogsList from './BlogsList'
import UpdateBlog from './UpdateBlog'
const Blogs = ({changeVariable}) => {
    return (
        <div>
            <div className="mt-10">
                <button className="rounded-lg bg-slate-800 text-white hover:bg-sky-900 p-2 text-base" onClick={() => { changeVariable("modal_add_blog", true) }}>Add New Blog</button>
            </div>
            <BlogsList />
            <AddBlogModal/>
            <UpdateBlog/>
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
export default connect(mapStateToProps,mapActionsToProps)(Blogs)