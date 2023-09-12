import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  console.log(bookmark)
  const {title} = bookmark;

  return (
    <div className=" rounded-lg m-4  bg-[#FFFFFF]">
    <h3 className=" text-lg p-3 font-semibold"> {title} </h3>
  </div>
  )
}
Bookmark.propTypes ={
  bookmark: PropTypes.object
}

export default Bookmark;
