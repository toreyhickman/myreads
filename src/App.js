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
    this.refreshBooks()
  }

  reshelve = (book, shelfSlug) => BooksAPI.update(book, shelfSlug).then(this.refreshBooks)

  refreshBooks = () => BooksAPI.getAll().then(books => this.setState({books}))

  currentShelf = (bookId) => {
    const bookOnShelf = this.findBookOnShelf(bookId)
    return bookOnShelf ? bookOnShelf.shelf : "none"
  }

  findBookOnShelf = (bookId) => this.state.books.find(book => book.id === bookId)

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchBooks currentShelf={this.currentShelf} reshelve={this.reshelve}/>} />

        <Route exact path="/" render={() => <Bookcase books={books} reshelve={this.reshelve} />} />
      </div>
    )
  }
}

export default BooksApp
