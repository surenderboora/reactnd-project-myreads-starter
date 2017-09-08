import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearchResults from './components/BookSearchResults'
import BookList from './components/BookList'
import BookShelfList from './components/BookShelfList'

class BooksApp extends React.Component {
  state = {
    books:[]
  }
  componentDidMount(){
    BooksAPI.getAll().then((booksOnShelves) => {
      this.setState({
        books: booksOnShelves
      })
    })
  }
  onShelfChange = (moveToShelf, bookToMove) => {
    this.setState((state) => {
      let books = state.books.filter((book)=> {
        return book.id !== bookToMove.id
      });
      bookToMove.shelf = moveToShelf;
      books = books.concat([bookToMove]);
      return {
        books : books
      }
    });
    BooksAPI.update(bookToMove, moveToShelf);
  };
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <BookSearchResults
              onShelfChange={this.onShelfChange}
              booksOnShelves = {this.state.books}/>
        )} />
        <Route exact path="/" render={()=> (
            <BookShelfList
              onShelfChange={this.onShelfChange}
              books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
