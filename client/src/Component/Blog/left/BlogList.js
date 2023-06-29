import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import BlogItem from './BlogItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import { blogsFetch, blogsFetchMore } from "../../../actions"
const BlogList = ({
  blogs_array,
  currentPage,
  pages,

  blogsFetch,
  blogsFetchMore
}) => {
  useEffect(() => {
    blogsFetch()
  }, [])
  useEffect(() => {
    console.log(blogs_array);

  }, [blogs_array])

  const [page, setPage] = useState(2)

  

  const fetchMore = () => {
    if (page <= pages) {
      setPage(page + 1)
      blogsFetchMore(page, blogs_array)
    }
  }


  return (
    <div className="left-blog lg:table-cell lg:w-7/12">

      <InfiniteScroll
        dataLength={blogs_array.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={currentPage !== pages}
        loader={<h4>Loading...</h4>}
      >
        {blogs_array && blogs_array.map((value, index) => {
          return <BlogItem data={value} key={index} />
        })}



      </InfiniteScroll>


      {/* <BlogItem/> */}
      {/* <BlogItem/> */}

    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    blogs_array,
    currentPage,
    pages
  } = state.variables
  return {
    blogs_array,
    currentPage,
    pages
  }
}

const mapActionsToProps = {
  blogsFetch,
  blogsFetchMore
}

export default connect(mapStateToProps, mapActionsToProps)(BlogList)