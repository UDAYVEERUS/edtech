import React from 'react'
import Post from './Post'

const LatestPosts = () => {
  return (
    <div class="my-10 flex flex-col bg-white px-5 lg:pl-10 ">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default LatestPosts