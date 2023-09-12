import './App.css'
import Header from './component/Header'
import Blogs from './component/Blogs'
import Bookmarks from './component/Bookmarks'
import { useState } from 'react'



function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const bookmarkHandler = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const readingTimeHandler = blog =>{
    const {reading_time} =blog;
    const newReadingTime = readingTime + reading_time;
    setReadingTime(newReadingTime);
    console.log(readingTime)
  }


  return (
    <>
    <Header/>
    <main className='container mx-auto md:flex'>
      <Blogs 
      bookmarkHandler={bookmarkHandler}
      readingTimeHandler={readingTimeHandler}
      />
      <Bookmarks
       bookmarks={bookmarks}
       readingTime={readingTime}
        />
    </main>
    </>
  )
}

export default App;
