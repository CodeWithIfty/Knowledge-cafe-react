import './App.css'
import Header from './component/Header'
import Blogs from './component/Blogs'
import Bookmarks from './component/Bookmarks'
import { useState } from 'react'



function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [markedRead, setMarkRead] = useState([])

  const bookmarkHandler = (blog) =>{

    if(bookmarks.includes(blog)){
      setBookmarks(bookmarks.filter(bookmark => bookmark !== blog))
    }else{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
    }
  }

  const readingTimeHandler = blog =>{
    const {reading_time} =blog;

    if(markedRead.includes(blog)){
      setMarkRead(markedRead.filter(markedRead => markedRead !== blog))
      setReadingTime(readingTime - reading_time); 
    }
    else{
      setMarkRead([...markedRead, blog])
      setReadingTime(readingTime + reading_time); 
    }
  }


  return (
    <>
    <Header/>
    <main className='container mx-auto md:flex'>
      <Blogs 
      bookmarkHandler={bookmarkHandler}
      readingTimeHandler={readingTimeHandler}
      bookmarks = {bookmarks}
      markedRead = {markedRead}
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
