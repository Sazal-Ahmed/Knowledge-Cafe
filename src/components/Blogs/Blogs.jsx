import { useEffect, useState } from "react";


const Blogs = () => {

    const [blogs,SetBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => SetBlogs(data))
    }, [])

    return (
        <div>

            
        </div>
    );
};

export default Blogs;