import Bookmark from "./Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-2/6 p-2 mt-4">
      <div className="border-2 border-[#6047EC] rounded-lg p-3 bg-[#6047EC1A]">
      <h2 className="text-2xl font-semibold text-[#6047EC] text-center">Spent time on read : {readingTime} min</h2>
      </div>

      <div className="bg-[#1111110D] my-5 p-3 rounded-lg">
        <h1 className="text-2xl font-semibold px-4 text-left">Bookmarked Blogs : {bookmarks.length} </h1>
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
        }
      </div>
    </div>
  )
}

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks
