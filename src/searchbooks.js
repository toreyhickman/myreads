import React, { Component } from 'react'
import SearchBar from './searchbar'
import SearchResults from './searchresults'

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default SearchBooks
