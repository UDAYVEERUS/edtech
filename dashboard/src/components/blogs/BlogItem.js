import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { hideModal } from '../../actions'
import { changeVariable } from '../../actions/variables'
const BlogItem = ({ 
  data,

  changeVariable,
  hideModal
}) => {
  const {
    title,
    description,
    descriptionShort,
    image,
    _id, 
  } = data
  const changeVaribleFunction = ()=>{
    changeVariable("modal_update_blog",true)
    changeVariable("modal_blog_title",title)
    changeVariable("modal_blog_id",_id)
    changeVariable("modal_blog_description",description)
    changeVariable("modal_blog_descriptionShort",descriptionShort)
    changeVariable("modal_blog_image",image)
  }
  return (
    <div onClick={()=>{changeVaribleFunction()}} className=" m-5">
      <Link to={""} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descriptionShort}</p>
        </div>
      </Link>
    </div>
    // <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
    //                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //                 <span className="sr-only">Close modal</span>
    //             </button>

  )
}

const mapStateToProps = (state) => {

  const {
      modal_update_blog,
      
  } = state.variables
  return {
      modal_update_blog,
     
  }

}

const mapActionsToProps = {
  hideModal,
  changeVariable
}




export default connect(mapStateToProps,mapActionsToProps)(BlogItem)