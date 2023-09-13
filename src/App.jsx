
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, SetBookmarks] = useState([]);

  const  handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    SetBookmarks(newBookmarks);

  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto mt-6'>
     <Blogs handleBookmark={handleBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
      
    </>
  )
}

export default App
