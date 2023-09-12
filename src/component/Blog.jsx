import PropTypes from "prop-types";
const Blog = ({blog, bookmarkHandler, readingTimeHandler, bookmarks, markedRead}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

      const handleBookmarkIcon = () => {
          if(bookmarks.includes(blog)){
            return <i className="fa-solid fa-bookmark text-2xl"></i>
          }else{
            return <i className="fa-regular fa-bookmark text-2xl "></i>
          }
      }

      const handleMarkReadTxt = () => {
        if(markedRead.includes(blog)){
          return <p className="text-gray-600">Mark as Unread</p>;
        }else{
          return <p className="text-[#6047EC]">Mark as read</p>;
        }
      } 
  return (
<div className="card bg-base-100 shadow-xl mb-3">
    <img className="rounded-lg cursor-pointer" src={cover} alt="Shoes" />
    <div className="card-body">
        <div className="flex items-center justify-between">
        <div className="flex items-center">
        <div className="w-14 m-3 cursor-pointer">
        <img src={author_img} alt="" />
        </div>
        <div>
        <h2 className="text-lg font-bold cursor-pointer">{author}</h2>
        <p>{posted_date}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-lg">{reading_time} min read</p>
        <button className="btn btn-ghost" onClick={() => bookmarkHandler(blog)}>
        {handleBookmarkIcon()}
          </button>
      </div>
        </div>
        <h2 className="card-title cursor-pointer">{title}</h2>
        <span className="text-lg font-mono cursor-pointer">#{hashtags}</span>
      <button className="text-left mt-2 font-semibold underline" onClick={ () => readingTimeHandler(blog)}>{handleMarkReadTxt()}</button>
    </div>
</div>
  )
}
Blog.propTypes = {
  blog: PropTypes.object,
  bookmarkHandler: PropTypes.func,
  readingTimeHandler: PropTypes.func,
  bookmarks: PropTypes.array,
  markedRead: PropTypes.array
};
export default Blog;
