import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
  state = {
    query : '',
    searchedBooks : []
  }

  updateQuery = (query) => {
    this.setState({
      query : query
    })
    this.updateSearchedBooks(query)
  }

  updateSearchedBooks = (query) => {
    query ? BooksAPI.search(query).then((searchedBooks) =>{
      {/*fetch searchedbooks using the method defined in BooksAPI */}
      searchedBooks.error ? this.setState({searchedBooks:[]}):
      this.setState({searchedBooks})
    }) :
    this.setState({searchedBooks : []})
  }


  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to = "/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
          <input type="text"
          placeholder="Search by title or author"
          value = {this.state.query}
          onChange = {(e) =>
            this.updateQuery(e.target.value)}
          />
          </div>
       </div>

      <div className="search-books-results">
          <ol className="books-grid">{
            this.state.searchedBooks.map(searchedBook =>
              <li key={searchedBook.id}>
               <Book
                book  = {searchedBook}
                moveShelf={this.props.moveShelf}
               />
              </li>

            )
          }
          </ol>

          </div>
     </div>
        )
      }
    }

export default SearchBar
