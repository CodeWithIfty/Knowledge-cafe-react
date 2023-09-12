import PropTypes from "prop-types";
const Blog = ({blog, bookmarkHandler, readingTimeHandler}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
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
        <button className="btn btn-ghost" onClick={() => bookmarkHandler(blog)}><i className="fa-regular fa-bookmark text-2xl"></i></button>
      </div>
        </div>
        <h2 className="card-title cursor-pointer">{title}</h2>
        <span className="text-lg font-mono cursor-pointer">#{hashtags}</span>
      <button className="text-left mt-2 text-[#6047EC] font-semibold underline" onClick={ () => readingTimeHandler(blog)}>Mark as read</button>
    </div>
</div>
  )
}
Blog.propTypes = {
  blog: PropTypes.object,
  bookmarkHandler: PropTypes.func,
  readingTimeHandler: PropTypes.func
};
export default Blog;
