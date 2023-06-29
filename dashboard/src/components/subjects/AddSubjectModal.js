import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AddSubject, hideModal, uploadPdf } from '../../actions'

const AddSubjectModal = ({
  modal_add_subject,
  files,
  filesUrl,
  course_id,


  uploadPdf,
  hideModal,
  // AddCourse,
  AddSubject
}) => {

  const updateState = (event) => {
    const variable = event.target.name
    const value = event.target.value
    setState({ ...state, [variable]: value })
  }

  const [state, setState] = useState({
    name: "",
    description: "",
    image:"",
    course_id: "",
    content:""
  })


  useEffect(() => {
    if (course_id) {
      setState({ ...state, course_id: course_id })
    }
  }, [course_id])

  const addSubjectFunction = (event) => {
    event.preventDefault()
    AddSubject(state)

  }
  const uploadFilesFucntion = (event) => {
    uploadPdf(event.target.files)
  }

  useEffect(() => {
    if (filesUrl) {
        console.log(filesUrl, "here url is")
        setState({ ...state, content:filesUrl })
    }
}, [filesUrl])


  return (
    <>
      <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={` ${modal_add_subject ? "" : "hidden"} fixed w-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => (hideModal("modal_add_subject"))} type="button" className=" mx-auto absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only" >Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white" >Sign in to our platform</h3>
              <form className="space-y-6" >
                <div>
                  <label htmlFor="coursename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course name</label>
                  <input onChange={(event) => { updateState(event) }} type="text" name="name" value={state.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Question" required />
                </div>
                <div>
                  <label htmlFor="ddewscription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <input onChange={(event) => { updateState(event) }} type="text" name="description" value={state.description} placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                  <input onChange={(event) => { updateState(event) }} type="text" name="image" value={state.image} placeholder="Image url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                {/* <div>
                  <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">is Active</label>
                  <input onChange={() => { setState(!state.is_active) }} type="radio" name="is_active" value={state.is_active} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div> */}

                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => { addSubjectFunction(e) }}>Add Question</button>

              </form>
              <form >
                <div>
                  <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">content</label>
                  <input onChange={(files) => { uploadFilesFucntion(files) }} type="file" name="content" multiple={true} placeholder="pdf" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  const {
    modal_add_subject,
    files,
    filesUrl
  } = state.variables
  return {
    modal_add_subject,
    files,
    filesUrl
  }

}

const mapActionsToProps = {
  uploadPdf,
  hideModal,
  AddSubject
}

export default connect(mapStateToProps, mapActionsToProps)(AddSubjectModal)