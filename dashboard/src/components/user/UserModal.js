import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { hideModal, updateUser } from '../../actions'

const UserModal = ({
    users_array,
    user_data,
    modal_update_user,

    hideModal,
    updateUser
}) => {
    const { name, phone, email, image, display_onHome,_id } = user_data
    const [state, setState] = useState({
        id:"",
        name: "",
        phone: "",
        email: "",
        image: "",
        display: "",
    })

    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }


    const updateUserFunction = (event)=>{
        event.preventDefault()
        updateUser(state)
    }
    useEffect(() => {
        
        setState({id:_id, name: name, email: email, phone: phone, image: image, display: display_onHome })
    }, [user_data])

    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={` ${modal_update_user ? "" : "hidden"} fixed w-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
            <div className="relative w-full h-full max-w-md md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => (hideModal("modal_update_user"))} type="button" className=" mx-auto absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only" >Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white" >user</h3>
                        <form className="space-y-6" >
                            <div>
                                <label htmlFor="coursename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user name</label>
                                <input onChange={(event) => { updateState(event) }} type="text" name="name" value={state.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Question" required />
                            </div>
                            <div>
                                <label htmlFor="ddewscription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user Email</label>
                                <input onChange={(event) => { updateState(event) }} type="text" name="email" value={state.email} placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="ddewscription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user phone</label>
                                <input onChange={(event) => { updateState(event) }} type="text" name="phone" value={state.phone} placeholder="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                                <img src={image} className="h-10 w-10" alt="" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">display On Home</label>
                                <input onChange={() => { setState({ ...state, display: !state.display }) }} type="checkbox" name="display" checked={state.display} placeholder="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required />
                            </div>
                            <div>
                                {image &&
                                    <img src={image} className='h-24 w-24' alt="" />}
                            </div>
                            {/* <div>
                  <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">is Active</label>
                  <input onChange={() => { setState(!state.is_active) }} type="radio" name="is_active" value={state.is_active} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div> */}
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => { updateUserFunction(e) }}>update Question</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    const {
        users_array,
        user_data, modal_update_user
    } = state.variables
    return {
        users_array,
        user_data,
        modal_update_user
    }
}

const mapActionsToProps = {
    hideModal,
    updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(UserModal)