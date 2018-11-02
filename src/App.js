import React from 'react'
// import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import SearchBar from './SearchBar'
import MainPage from './MainPage'
import Book from './Book'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <BookShelf />
      </div>
    )
   }
}

export default BooksApp
