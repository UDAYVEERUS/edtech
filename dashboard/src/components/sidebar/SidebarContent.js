import React from 'react'
import { Link } from 'react-router-dom'

const SidebarContent = () => {
    return (

        <div className="mr-10 w-1/5 h-screen bg-slate-800 fixed">
            <div className="pr-20">
                <div className="flex flex-col pl-5">
                    <div className="my-3 h-full w-full cursor-pointer rounded-lg bg-sky-900 p-1 px-10 text-white">
                        <Link to={`/dashboard`}>DashBoard</Link>
                    </div>
                    <div className="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                        <Link to={'/course'}>Courses</Link>
                    </div>
                    <div className="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                        <Link to={'/mocktest'}>Mock Test</Link>
                    </div>
                    <div className="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                    <Link to={'/blogs'}>blogs</Link>
                    </div>
                    <div className="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                        <Link to={"/subject"}>Subjects</Link>
                    </div>
                    <div className="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                        <Link to={"/users"}>Users</Link>
                    </div>
                    <div className="my-3 h-fit w-full cursor-pointer p-1 px-10 text-white">
                        <div>Result</div>
                    </div>
                </div>
            </div>
            {/* <div className="mx-auto h-[1px] w-10/12 bg-white text-center"></div> */}
        </div>


    )
}

export default SidebarContent