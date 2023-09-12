import { useEffect, useState } from "react";
import Blog from "../Blog/blog";


const Blogs = () => {

    const [blogs,SetBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl"> Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;