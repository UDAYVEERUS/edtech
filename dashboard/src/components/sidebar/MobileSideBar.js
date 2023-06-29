import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeVariable } from '../../actions/variables'

const MobileSidebar = ({
    sideBar,

    changeVariable
}) => {
    return (
        <>
            <div onClick={()=>{changeVariable("sideBar",true)}} className='lg:hidden fixed flex flex-col h-fit p-2 bg-slate-200 w-fit'>
                <div className="h-1 w-6 bg-black my-1"></div>
                <div className="h-1 w-6 bg-black my-1"></div>
                <div className="h-1 w-6 bg-black my-1"></div>
            </div>
            <div class={`${sideBar ? "" : "hidden"} fixed lg:block mr-10 w-screen h-screen bg-slate-800`}>
                <div onClick={()=>{changeVariable("sideBar",false)}} className='right-0 absolute text-xl text-white bg-slate-900 p-2'>
                    X
                </div>
                <div class="pr-20">
                    <div class="flex flex-col pl-5">
                        <div class="my-3 h-full w-full cursor-pointer rounded-lg bg-sky-900 p-1 px-10 text-white">
                            <Link to={`/dashboard`}>DashBoard</Link>
                        </div>
                        <div class="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                            <Link to={'/course'}>Courses</Link>
                        </div>
                        <div class="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                            <Link to={'/mocktest'}>Mock Test</Link>
                        </div>
                        <div class="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                            <div>Users</div>
                        </div>
                        <div class="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                            <div>Test</div>
                        </div>
                        <div class="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                            <div>Users</div>
                        </div>
                        <div class="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                            <div>Result</div>
                        </div>
                    </div>
                </div>
                {/* <div class="mx-auto h-[1px] w-10/12 bg-white text-center"></div> */}
            </div>

        </>
    )
}


const mapStateToProps = (state) => {
    const {
        sideBar
    } = state.variables
    return {
        sideBar
    }
}

const mapActionsToProps = {
    changeVariable
}

export default connect(mapStateToProps, mapActionsToProps)(MobileSidebar)