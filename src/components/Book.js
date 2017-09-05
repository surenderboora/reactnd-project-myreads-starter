import React, { Component } from 'react';

class Book extends Component {
    render() {
        const book = this.props.book;
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option selected = {book.shelf === 'currentlyReading'} value="currentlyReading">Currently Reading</option>
                    <option selected = {book.shelf === 'wantToRead'} value="wantToRead">Want to Read</option>
                    <option selected = {book.shelf === 'read'} value="read">Read</option>
                    <option selected = {book.shelf === 'none'} value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
        );
    }
}

export default Book;