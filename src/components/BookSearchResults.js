import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList'
// import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import { debounce } from 'throttle-debounce'

class BookSearchResults extends Component {
    constructor() {
        super();
        this.searchBooks = debounce(500, this.searchBooks);
    }
    state = {
        query: '',
        books: []
    };
    searchBooks = (query) => {
        if(query.trim() === '') {
            this.setState({books : []});
            return;
        }
        BooksAPI.search(query, 20).then((books) => {
            this.setState({
                books: books
            });
        });
    };
    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.searchBooks(query);
    };
    resetSearch = ()=> {
        this.setState({query: ''});
    };
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input
                        type="text"
                        value={this.state.query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                        placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={this.state.books} onShelfChange={this.props.onShelfChange}/>
                </div>
            </div>
        );
    }
}

export default BookSearchResults;