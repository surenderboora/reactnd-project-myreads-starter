import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    onShelfChange = (shelf, book) => {
        this.props.onShelfChange(shelf, book);
    };
    render() {
        const books = this.props.books;
        return (
            <ol className="books-grid">
                {books.map((book)=>(
                    <li key={book.id}>
                        <Book book={book} onShelfChange={(shelf, book) => this.onShelfChange(shelf, book)}/>
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookList;