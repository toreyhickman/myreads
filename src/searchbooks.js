import React, { Component } from 'react'
import SearchBar from './searchbar'

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
