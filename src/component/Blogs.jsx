import { useEffect } from "react";
import { useState } from "react"
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({bookmarkHandler, readingTimeHandler, bookmarks, markedRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])


  return (
    <div className="md:w-2/3 mt-6 ">
  {
    blogs.map((blog, index) =><Blog
       key={index}
       blog={blog}
       bookmarkHandler={bookmarkHandler}
       readingTimeHandler={readingTimeHandler}
       bookmarks= {bookmarks}
       markedRead= {markedRead}
    />)
  }
    </div>
  )
}

Blogs.propTypes ={
  bookmarkHandler: PropTypes.func,
  readingTimeHandler: PropTypes.func,
  bookmarks: PropTypes.array,
  markedRead: PropTypes.array
}

export default Blogs;
