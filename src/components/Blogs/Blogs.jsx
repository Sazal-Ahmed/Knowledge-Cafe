import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';




const Blogs = ({handleBookmark, handleTime}) => {

    const [blogs,SetBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleTime={handleTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark : PropTypes.func,
    handleTime: PropTypes.func
}

export default Blogs;