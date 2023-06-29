import React from 'react'
import { connect } from 'react-redux'
import { changeVariable } from '../actions/variables'

const Result = ({
    resultData,
    setShowAnswer,
    mocktest_array_length,
    
    changeVariable
}) => {
    const {totalquestion,success}=resultData
    const setShowAnswerFunc = ()=>{
        changeVariable("resultData","")
        setShowAnswer(true)
    }
    return (
        <div className='text-center lg:w-[60%] mx-auto pb-20  flex flex-col justify-center items-center shadow-xl'>
            
            <div className='h-72 w-96 flex items-center justify-center     '>
                <div className='border-8 border-green-800 w-fit rounded-full'>
                    <div className='text-4xl p-10'>{success}/{totalquestion}</div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-20 '>
                <div className='flex items-center'>Correct Question <div className='h-4 w-6 bg-green-600 mx-4 '></div>{success}</div>
                <div className='flex items-center'>Incorrect Question <div className='h-4 w-6 bg-red-600 mx-4 '></div>{totalquestion-success}</div>
                <div className='flex items-center'>Attempted Question <div className='h-4 w-6 bg-yellow-300 mx-4 '></div>{totalquestion}</div>
                <div className='flex items-center'>Total Question <div className='h-4 w-6 bg-blue-300 mx-4 '></div>{mocktest_array_length}</div>
            </div>
            <button className='px-10 py-4 bg-yellow-300 text-white rounded-xl mt-10'onClick={()=>{setShowAnswerFunc()}}>Show Answer</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        resultData
    } = state.variables
    return {
        resultData
    }
}

const mapActionsToProps = {
    changeVariable
}

export default connect(mapStateToProps, mapActionsToProps)(Result)