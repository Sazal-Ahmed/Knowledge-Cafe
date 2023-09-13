
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, SetBookmarks] = useState([]);
  const [raedingTime, setReadingTime] = useState(0);

  const handleTime = (Id, time) =>{
    setReadingTime(raedingTime + time);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.Id !== Id);
    SetBookmarks(remainingBookmarks);
  }

  const  handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    SetBookmarks(newBookmarks);

  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto mt-6'>
     <Blogs handleBookmark={handleBookmark} handleTime={handleTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} raedingTime={raedingTime}></Bookmarks>
     </div>
      
      
    </>
  )
}

export default App
