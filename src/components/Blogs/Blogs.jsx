import { useEffect, useState } from "react";
import Blog from "../Blog/blog";
import PropTypes from 'prop-types';




const Blogs = ({handleBookmark}) => {

    const [blogs,SetBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark : PropTypes.func
}

export default Blogs;