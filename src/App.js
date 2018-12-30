import React from 'react'
import { Route } from 'react-router-dom'
import SearchBar from './SearchBar'
import MainPage from './MainPage'
import './App.css'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  constructor(props) {
   super(props);
   this.moveShelf = this.moveShelf.bind(this);
   this.state = {
     books : [] ,
     query : '',
     searchedBooks : []
   };
 }

componentDidMount () {
     BooksAPI.getAll().then((books)=>{
       this.setState({books: books})
     })
 }

moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
 })
}

updateQuery = (query) => {
    this.setState({
      query : query
    })
    this.updateSearchedBooks(query)
  }

  updateSearchedBooks = (query) => {
    let searchedBooksShelf
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchedBooks: [] })
        } else {
          searchedBooksShelf = books.map(book => {
            book.shelf = this.syncShelf(book);
            return book;
          })
          this.setState({ searchedBooks: searchedBooksShelf })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  syncShelf = (displayedBook) => {
    let matchingShelf = this.state.books.filter(book =>
      displayedBook.id === book.id
    )
    return matchingShelf.length ? matchingShelf[0].shelf : "none"
  }

  // updateSearchedBooks = (query) => {
    //     query ? BooksAPI.search(query).then((searchedBooks) =>{
      //       /*fetch searchedbooks using the method defined in BooksAPI */
      //       // The response we get from BooksAPI.search is an array of books that don't have a shelf value,
      //       // even if the book is in one of the shelves, so we should write a function
      //       // to compare each book in searchedBooks with what we've got in state.books to retrieve the .shelf value,
      //       // or assign shelf = 'none' if the book in not in any shelf.
      //       // This is required to make books has the correct shelf option selected in the search page.
      //       let book1 = {this.state.books};
      //       function compareArrays(searchedBooks, book1){
        //        return searchedBooks.every((e)=> book1.includes(e));
        //       }
        //
        //
        //
        //       searchedBooks.error ? this.setState({searchedBooks:[]}):
        //       this.setState({searchedBooks})
        //     }) :
        //     this.setState({searchedBooks : []})
        //   }

        render() {
          return (
            <div className="app">

            <Route exact path="/" render={() =>
              < MainPage
              books = {this.state.books} //calling all my books
              moveShelf = {this.moveShelf}

              />
            }/>

            <Route path="/search" render={() =>
              < SearchBar
              searchedBooks = {this.state.searchedBooks}
              books={this.state.books}
              moveShelf = {this.moveShelf}
              updateQuery={this.updateQuery}
              updateSearchedBooks={this.updateSearchedBooks}
              query={this.state.query}
              />
            }/>


            </div>
          )
        }
      }

      export default BooksApp
