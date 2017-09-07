import React, { Component } from 'react';
import BookList from './BookList';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class BookShelfList extends Component {
    render() {
        const { onShelfChange, books } = this.props;
        const currentlyReading = books.filter((book)=> (
                            book.shelf === 'currentlyReading'
                        ));
        const wantToRead = books.filter((book)=> (
                            book.shelf === 'wantToRead'
                        ));
        const read = books.filter((book)=> (
                            book.shelf === 'read'
                        ));
        return (
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <BookShelf
                        onShelfChange = {onShelfChange}
                        books = {currentlyReading}
                        bookShelfTitle = 'Currently Reading'/>
                    <BookShelf
                        onShelfChange = {onShelfChange}
                        books = {wantToRead}
                        bookShelfTitle = 'Want to Read'/>
                    <BookShelf
                        onShelfChange = {onShelfChange}
                        books = {read}
                        bookShelfTitle = 'Read'/>
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookShelfList;