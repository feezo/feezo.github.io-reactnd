import React from 'react'
import * as BooksAPI from './BooksAPI'

class SearchBar extends React.Component {
  state = {
    query : '',
    searchedBooks : []
  }

  updateQuery = (query) => {
    this.setState({
      query : query
    })
  }

  getSearchedBooks = (query) => {
    BooksAPI.search(query).then((searchedBooks) =>{
      this.setState({searchedBooks})
    })
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
          <input type="text"
          placeholder="Search by title or author"
          value = {this.state.query}
          onChange = {(e)=>this.updateQuery(e.target.value)}
          />
          </div>
       </div>
          <div className="search-books-results">
          <ol className="books-grid"></ol>
          </div>
     </div>
        )
      }
    }

export default SearchBar
