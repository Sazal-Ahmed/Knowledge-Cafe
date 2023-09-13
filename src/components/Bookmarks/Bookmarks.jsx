import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, raedingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 p-4 rounded-lg">
            <div>
                <h3 className='text-3xl text-sky-500 text-center border-2 border-sky-400 p-4 rounded-xl'>Spend time on read : {raedingTime}</h3>
            </div>
            <h2 className="text-3xl text-center mt-4">Bookmark Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes ={ 
    bookmarks: PropTypes.array,
    raedingTime:  PropTypes.number
}

export default Bookmarks;