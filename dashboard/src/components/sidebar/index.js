import React from 'react'
import DesktopSidebar from './DesktopSideBar'
import MobileSideBar from "./MobileSideBar"
const SideBar = () => {
  return (
    <>
    {/* <div className='hidden lg:block'> */}
    <DesktopSidebar/>
    {/* </div> */}
    {/* <div className='block lg:hidden'> */}
    {/* <MobileSideBar /> */}
    {/* </div> */}
    </>
  )
}

export default SideBar