import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './searchbooks'
import Bookcase from './bookcase'
import './App.css'

class BooksApp extends React.Component {
  state = {
    "books": []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchBooks />} />

        <Route exact path="/" render={() => <Bookcase books={books} />} />
      </div>
    )
  }
}

export default BooksApp
