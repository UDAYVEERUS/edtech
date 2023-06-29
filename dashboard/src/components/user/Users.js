import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'
import { getAllUsers } from "../../actions"
import UserModal from "./UserModal"
const Users = ({
    users_array,

    getAllUsers
}) => {

    useEffect(() => {
        getAllUsers()
    }, [])


    return (
        <>
            <div className='flex'>
                {users_array && users_array.map((value, index) => {
                    return <UserItem data={value} key={index} />
                })}
            </div>
            <UserModal />
        </>
    )
}

const mapStateToProps = (state) => {
    const {
        users_array,
    } = state.variables
    return {
        users_array,
    }
}

const mapActionsToProps = {
    getAllUsers
}
export default connect(mapStateToProps, mapActionsToProps)(Users)