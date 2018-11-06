import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  render () {
    this.props.books
    return (
      <div className="bookshelf">

        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.filter( book => book.shelf ===
                "currentlyReading"
              ).map( book => (
                <li key={book.id}>
                  <Book
                   book={book}
                   moveShelf={this.props.moveShelf}/>
                </li>
              ))
            }
          </ol>
        </div>

       <h2 className="bookshelf-title">Want to Read</h2>
       <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.filter( book => book.shelf ===
                "wantToRead"
              ).map( book => (
                <li key={book.id}>
                <Book
                book={book}
                moveShelf={this.props.moveShelf}/>
                </li>
              ))
            }
            </ol>
        </div>

        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {
                this.props.books.filter( book => book.shelf ===
                  "read"
                ).map( book => (
                  <li key={book.id}>
                  <Book
                  book={book}
                  moveShelf={this.props.moveShelf}/>
                  </li>
                ))
              }
          </ol>
       </div>

    </div>
          )
        }
      }
      export default BookShelf
