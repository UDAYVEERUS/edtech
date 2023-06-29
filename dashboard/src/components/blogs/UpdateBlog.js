import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteBlog, hideModal, updateBlog } from '../../actions'

const UpdateBlog = ({
    modal_blog_title,
    modal_blog_description,
    modal_blog_descriptionShort,
    modal_update_blog,
    modal_blog_id,
    modal_blog_image,

    hideModal,
    deleteBlog,
    updateBlog
}) => {

    const [state, setState] = useState({
        id: "",
        title: "",
        description: "",
        descriptionShort: "",
        image: ""
    })

    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }

    const updateBlogFunction = (event) => {
        event.preventDefault()
        updateBlog(state)
    }
    useEffect(() => {
        if (modal_blog_title) {
            setState({
                ...state,
                id:modal_blog_id,
                title: modal_blog_title,
                description: modal_blog_description,
                descriptionShort: modal_blog_descriptionShort,
                image: modal_blog_image
            })
        }
    }, [modal_blog_title])

    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${modal_update_blog ? "" : "hidden"}  fixed w-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
            <div className="relative w-full h-full max-w-md md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => (hideModal("modal_update_blog"))} type="button" className=" mx-auto absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only" >Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white" ></h3>
                        <form className="space-y-6" >
                            <div>
                                <label htmlFor="coursename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">blog Title</label>
                                <input onChange={(event) => { updateState(event) }} type="text" name="title" value={state.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Question" required />
                            </div>
                            <div>
                                <label htmlFor="ddewscription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input onChange={(event) => { updateState(event) }} type="text" name="description" value={state.description} placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="ddewscription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description Short</label>
                                <input onChange={(event) => { updateState(event) }} type="text" name="descriptionShort" value={state.descriptionShort} placeholder="Description Short" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className='flex justify-evenly w-full'>
                                <button type="submit" className="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => { updateBlogFunction(e) }}>Update course</button>
                                <button type="button" className="w-1/3 text-white bg-red-600 hover:bg-red-800  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  py-2.5 text-center  " onClick={(e) => { deleteBlog(state.id) }}>delete course</button>
                            </div>

                        </form>
                        <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={state.image} alt="" />
                        {/* <form >
                            <div>
                                <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">content</label>
                                <input onChange={(files) => { uploadFilesFucntion(files) }} type="file" name="content" multiple={true} placeholder="pdf" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {

    const {

        modal_blog_title,
        modal_blog_description,
        modal_blog_descriptionShort,
        modal_update_blog,
        modal_blog_id,
        modal_blog_image,

    } = state.variables
    return {

        modal_blog_title,
        modal_blog_description,
        modal_blog_descriptionShort,
        modal_update_blog,
        modal_blog_id,
        modal_blog_image,
    }

}

const mapActionsToProps = {
    hideModal,
    deleteBlog,
    updateBlog
    // updateCourse,
    // uploadPdf,
    // deleteCourse
}
export default connect(mapStateToProps, mapActionsToProps)(UpdateBlog)