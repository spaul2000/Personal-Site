import React, { useState } from 'react';
import BookPost from './BookPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BookPostContainer = ({ book }) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(prevIsToggled => !prevIsToggled);
    };

    return (
        <div className='book-container' style={{ border: '1px solid black' }}>
            <button onClick={toggle}>
                {isToggled ?
                    <FontAwesomeIcon icon={faChevronDown} /> :
                    <FontAwesomeIcon icon={faChevronRight} />
                }
            </button>
            {isToggled ? <BookPost cover={book['cover']} description={book['description']} title={book['title']} author={book['author']} />
                : <h4 style={{ display: 'inline' }}>{book['title']} by {book['author']}</h4>
            }
        </div>

    );
};

export default BookPostContainer;