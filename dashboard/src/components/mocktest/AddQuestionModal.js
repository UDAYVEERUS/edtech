import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddMockTest, getSubjects, hideModal } from '../../actions'

const AddQuestionModal = ({
    modal_add_question,
    subjects_array,
    // id,
    hideModal,
    AddMockTest,
    getSubjects
}) => {

    const { id } = useParams()

    const [state, setState] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
        course: id,
        subject: ""
    })

    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }

    useEffect(() => {
        console.log(id, "inside modal")
        setState({ ...state, course: id })
        getSubjects(id)
    }, [id])

    const addQuestionButton = (event) => {
        event.preventDefault()
        AddMockTest(state)
    }

    return (

        <>
            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={` ${modal_add_question ? "" : "hidden"} fixed w-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
                <div className="relative w-full h-full max-w-md md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => (hideModal("modal_add_question"))} type="button" className=" mx-auto absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white" >Sign in to our platform</h3>
                            <form className="space-y-6" >
                                <div>
                                    <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question</label>
                                    <input onChange={(event) => { updateState(event) }} type="text" name="question" value={state.question} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Question" required />
                                </div>
                                <div>
                                    <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option1</label>
                                    <input onChange={(event) => { updateState(event) }} type="text" name="option1" value={state.option1} placeholder="option1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option2</label>
                                    <input onChange={(event) => { updateState(event) }} type="text" name="option2" value={state.option2} placeholder="option2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option3</label>
                                    <input onChange={(event) => { updateState(event) }} type="text" name="option3" value={state.option3} placeholder="option3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option4</label>
                                    <input onChange={(event) => { updateState(event) }} type="text" name="option4" value={state.option4} placeholder="option4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label htmlFor="Option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Answer</label>
                                    <input onChange={(event) => { updateState(event) }} type="text" name="answer" value={state.answer} placeholder="answer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <select value={state.subject}  onChange={(event) => { updateState(event) }} className="w-full py-2 rounded-md border bg-slate-100" name="subject" placeholder='find' id="">
                                        {subjects_array && subjects_array.map((data, index) => {
                                            return <option key={index} value={data._id}>{data.name}</option>
                                        })}

                                    </select>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => { addQuestionButton(e) }}>Add Question</button>

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
        modal_add_question,
        subjects_array
    } = state.variables
    return {
        modal_add_question,
        subjects_array
    }
}
const mapActionsToProps = {
    hideModal,
    AddMockTest,
    getSubjects
}
export default connect(mapStateToProps, mapActionsToProps)(AddQuestionModal)