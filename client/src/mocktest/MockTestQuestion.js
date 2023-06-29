import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addMockTestAnswer } from '../actions'

const MockTestQuestion = ({
  data,
  showAnswer,
  mocktest_answer_array,
  addMockTestAnswer,
}) => {
  const { _id, question, option1, option2, option3, option4,answer } = data
  const [state, setState] = useState({
    _id: _id,
    answer: ""
  })

  const changeStateFunc = (data) => {
    setState({ ...state, answer: data })
  }


  useEffect(() => {
    if (state.answer !== "") {
      addMockTestAnswer(state, mocktest_answer_array)
    }
  }, [state])


  useEffect(() => {
    console.log(mocktest_answer_array, ",mocktest_array")
  }, [mocktest_answer_array])

  return (
    <div className="question lg:pt-20 pt-10">
      <div className="lg:text-2xl text-md font-semibold">
        <b>
          <u>Q.</u> {question}
        </b>
      </div>
      <div className="space-y-4 pt-9 font-sans ">
        <div className="flex items-center">
          <input
            className="h-3 lg:h-5  lg:w-24 w-10   cursor-pointer  focus:outline-none  "
            type="radio"
            name={`radiobutton${_id}`}
            id="radioDefault01"
            value={option1}
            onClick={(e) => { changeStateFunc(e.target.value) }}
          />
          <label className="lg:text-2xl text-md"> {option1} </label>
        </div>
        <div className="flex items-center">
          <input
            className="h-3 lg:h-5  lg:w-24 w-10 cursor-pointer  focus:outline-none "
            type="radio"
            name={`radiobutton${_id}`}
            id="radioDefault01"
            value={option2}
            onClick={(e) => { changeStateFunc(e.target.value) }}
          />
          <label className="lg:text-2xl text-md">{option2}</label>
        </div>
        <div className="flex items-center">
          <input
            className="h-3 lg:h-5  lg:w-24 w-10 cursor-pointer  focus:outline-none "
            type="radio"
            name={`radiobutton${_id}`}
            id="radioDefault01"
            value={option3}
            onClick={(e) => { changeStateFunc(e.target.value) }}
          />
          <label className="lg:text-2xl text-md">{option3}</label>
        </div>
        <div className="flex items-center">
          <input
            className="h-3 lg:h-5  lg:w-24 w-10 cursor-pointer  focus:outline-none "
            type="radio"
            name={`radiobutton${_id}`}
            value={option4}
            onClick={(e) => { changeStateFunc(e.target.value) }}
          />
          <label className="lg:text-2xl text-md"> {option4} </label>
        </div>
        {showAnswer&&
        <div className="flex items-center">
          <div className='text-green-600 lg:text-3xl mr-3'>Answer: </div>
          <label className="lg:text-2xl text-md text-green-600"> {answer} </label>
        </div>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    mocktest_answer_array
  } = state.variables
  return {
    mocktest_answer_array
  }
}

const mapActionsToProps = {
  addMockTestAnswer
}

export default connect(mapStateToProps, mapActionsToProps)(MockTestQuestion)
