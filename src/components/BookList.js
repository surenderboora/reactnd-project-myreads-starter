import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    render() {
        const books = this.props.books;
        return (
            <ol className="books-grid">
                {books.map((book)=>(
                    <li key={book.id}>
                        <Book book={book} />
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookList;