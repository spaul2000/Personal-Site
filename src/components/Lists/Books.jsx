import React, { Component } from 'react';
import BookData from '../../data/BookData';
import BookPostContainer from './BookPostContainer';

class Books extends Component {

    render() {
        let book = BookData[0];
        console.log(book)
        return (
            <div className='books'>
                <div className="title" style={{ marginBottom: '2em' }}>
                    <h3>Books</h3>
                    <p>
                        A list of books I have read after making this site:
                    </p>
                </div>
                {
                    BookData.map(book => (
                        <BookPostContainer book={book} />
                    ))
                }
            </div>
        );
    }
}

export default Books;