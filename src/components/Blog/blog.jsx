
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog ,handleBookmark}) => {

    const {title,cover,author_name, author_img, reading_time, posted_date,hashtags} = blog;

    return (
        <div className="mb-10">
            <img className="w-full mb-4 rounded-lg" src={cover} alt={`cover picture of title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14"src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button
                        onClick={()=>handleBookmark(blog)}
                    className='ml-2 text-xl text-red-600 items-center'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="" className='m-1 text-gray-500'>{hash}</a></span>)
                }
            </p>
            <div>
                <button className='text-purple-700 underline mt-2'>mark as read</button>
            </div>

        </div>
    )
}

Blog.propTypes = {

    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}



export default Blog;