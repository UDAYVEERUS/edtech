import React from 'react'
import { connect } from 'react-redux'
import { deleteMockTestQuestion } from '../../actions'

const MockTestQuestion = ({
    data,
    course,
    deleteMockTestQuestion
}) => {
    const deleteQuestion = (data)=>{
        deleteMockTestQuestion(data)
        
    }
    return (
        <tr className='h-10 rounded-sm border hover:bg-slate-300'>
            <td className='text-left pl-5'>{data.question}</td>
            <td>{data.option1}</td>
            <td>{data.option2}</td>
            <td>{data.option3}</td>
            <td>{data.option4}</td>
            <td>{data.answer}</td>
            <td><div className="text-red-600 cursor-pointer" onClick={()=>{deleteQuestion(data._id)}}>Delete</div></td>
        </tr>
    )
}
const mapStateToProps = (state)=>{
    const {

    }=state.variables
    return {

    }
}
const mapActionsToProps = {
    deleteMockTestQuestion
}
export default connect(mapStateToProps,mapActionsToProps) (MockTestQuestion)