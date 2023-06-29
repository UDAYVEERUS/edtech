import React from 'react'
import { connect } from 'react-redux'
import { changeVariable } from '../../actions/variables'

const UserItem = ({
    data,

    changeVariable
}) => {
    const {name,email,phone}= data
    const displayUpdateModal = ()=>{
        changeVariable("user_data",data)
        changeVariable("modal_update_user",true)
    }
    return (
        <div onClick={() => { displayUpdateModal() }} className="block mx-2 h-fit flex w-screen lg:w-fit flex-col justify-evenly max-w-sm p-6 h-44  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{email}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{phone}</p>
            {/* <div className='flex'>
        {content && content.split(",").map((value, index) => {
          return <a href={`${value}`} target="_blank" className="text-black mx-2 border p-1 bg-white" key={index}>pdf{index}</a>
        })}
      </div> */}

        </div>
    )
}
const mapStateToProps = (state)=>{
    const {

    }=state.variables 
    return {

    }
}

const mapActionsToProps = {
    changeVariable    
}

export default connect(mapStateToProps,mapActionsToProps)(UserItem)