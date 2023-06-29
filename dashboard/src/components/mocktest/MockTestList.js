import React from 'react'
import { connect } from 'react-redux'
import MockTestQuestion from './MockTestQuestion'

const MockTestList = ({
    mocktest_array,
    course,
    loading
}) => {
    return (
        <table className="h-full w-full table-fixed text-center">
            <thead>
                <tr className='h-10 rounded-sm border-b-2'>
                    <th className='w-96'>Question</th>
                    <th>Option1</th>
                    <th>Option2</th>
                    <th>Option3</th>
                    <th>option4</th>
                    <th>Answer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody  className={loading?"animate-pulse":""}>
                {mocktest_array.map((value,index)=>{
                    return <MockTestQuestion data = {value} key={index}/>
                })}
                
            </tbody>
        </table>
    )
}

const mapStateToProps = (state)=>{
    const {
        loading
    }=state.variables

    return {
        loading
    }
}
const mapActionsToProps = {
    
}
export default connect(mapStateToProps,mapActionsToProps)( MockTestList)