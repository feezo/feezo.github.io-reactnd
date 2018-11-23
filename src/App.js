import React from 'react'
import SearchBar from './SearchBar'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'
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
   BooksAPI.update(book, shelf); //call update method here to stack books
   BooksAPI.getAll().then((books)=>{ //to have books update dynamically -->
     this.setState({books: books})
   })
  }

updateQuery = (query) => {
    this.setState({
      query : query
    })
    this.updateSearchedBooks(query)
  }

updateSearchedBooks = (query) => {
    query ? BooksAPI.search(query).then((searchedBooks) =>{
      /*fetch searchedbooks using the method defined in BooksAPI */
      searchedBooks.error ? this.setState({searchedBooks:[]}):
      this.setState({searchedBooks})
    }) :
    this.setState({searchedBooks : []})
  }





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
          moveShelf = {this.moveShelf}
          updateQuery={this.updateQuery}
          updateSearchedBooks={this.updateSearchedBooks}
          />
        }/>


      </div>
    )
   }
}

export default BooksApp
