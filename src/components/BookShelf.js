import React, { Component } from 'react';
import BookList from './BookList';

class BookShelf extends Component {
    render() {
        const { onShelfChange, books, bookShelfId, bookShelfTitle} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <BookList books={books}
                    onShelfChange={onShelfChange}/>
                </div>
            </div>
        );
    }
}

export default BookShelf;