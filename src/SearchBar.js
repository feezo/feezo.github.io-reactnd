import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const SearchBar = (props)  => {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to = "/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
          <input type="text"
          placeholder="Search by title or author"
          value = {props.query}
          onChange = {(e) =>
            props.updateQuery(e.target.value)}
          />
          </div>
       </div>

      <div className="search-books-results">
          <ol className="books-grid">{
            props.searchedBooks.map(searchedBook => {
              return (
                <li key={searchedBook.id}>
                <Book
                book  = {searchedBook}
                moveShelf={props.moveShelf}
                updateQuery={props.updateQuery}
                updateSearchedBooks={props.updateSearchedBooks}
                currentShelf={searchedBook.shelf}
                />
                </li>
              )
            })
          }
          </ol>
          </div>
          </div>
        )
      }


export default SearchBar
