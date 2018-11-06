import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class MainPage extends Component {
  constructor(props) {
   super(props);
   this.state = {books : []};
 }


  componentDidMount () {
    BooksAPI.getAll().then((books)=>{
      this.setState({books: books})
    })
}

moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf); //call update method here to stack books

  BooksAPI.getAll().then((books)=>{ //to have books update dynamically -->
    this.setState({books: books})
  })
  }

  render(){
    // test to see prop was received
    console.log(this.state.books);
    return(
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">
      <BookShelf
      books={this.state.books}
      moveShelf={this.moveShelf}
      />
    </div>

    <div className="open-search">
      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
    </div>

  </div>
    )
  }
}

export default MainPage
