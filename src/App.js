import React from 'react'
import SearchBar from './SearchBar'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'
import './App.css'


class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() =>
        < MainPage
        books={this.state.books}
        moveShelf = {this.moveShelf}
        />
        }/>

        <Route path="/search" render={() => <div>
          < SearchBar
          books={this.state.books}
          moveShelf = {this.moveShelf}
          />
          </div>}/>
      </div>
    )
   }
}

export default BooksApp
