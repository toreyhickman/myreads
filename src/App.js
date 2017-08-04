import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './searchbooks'
import Bookcase from './bookcase'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchBooks />} />

        <Route exact path="/" render={() => <Bookcase />} />
      </div>
    )
  }
}

export default BooksApp
