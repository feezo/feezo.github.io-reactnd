import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

const MainPage = (props) => {
return(
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">
      <BookShelf
      books={props.books}
      moveShelf={props.moveShelf}
      currentShelf={props.currentShelf}
      />
    </div>

    <div className="open-search">
      <Link
      to = "/search">Add a book</Link>
    </div>

  </div>
    )
   }


export default MainPage
