import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-3 m-3 rounded-xl bg-gray-200'>
            <h2 className='text-xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;