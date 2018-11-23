import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

// import * as BooksAPI from './BooksAPI'
// import Book from './Book'

class MainPage extends Component {


  render(){
    // test to see prop was received
    //console.log(this.state.books);
    return(
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">
      <BookShelf
      books={this.props.books}
      moveShelf={this.props.moveShelf}
      />
    </div>

    <div className="open-search">
      <Link
      to = "/search">Add a book</Link>
    </div>

  </div>
    )
  }
}

export default MainPage
