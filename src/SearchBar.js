import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'



class SearchBar extends React.Component {


  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to = "/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
          <input type="text"
          placeholder="Search by title or author"
          value = {this.props.query}
          onChange = {(e) =>
            this.props.updateQuery(e.target.value)}
          />
          </div>
       </div>

      <div className="search-books-results">
          <ol className="books-grid">{
            this.props.searchedBooks.map(searchedBook =>
              <li key={searchedBook.id}>
               <Book
                book  = {searchedBook}
                moveShelf={this.props.moveShelf}
                updateQuery={this.props.updateQuery}
                updateSearchedBooks={this.props.updateSearchedBooks}
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
