import React from 'react'
import SearchBar from './SearchBar'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'
import './App.css'


class BooksApp extends React.Component {


  render() {
    return (
      this.props.moveShelf,
      <div className="app">

      <Route exact path="/" render={() =>
        < MainPage
        />
      }/>

        <Route path="/search" render={(props) =>
          < SearchBar
           {...props} moveShelf={this.moveShelf}/>
        }/>


      </div>
    )
   }
}

export default BooksApp
