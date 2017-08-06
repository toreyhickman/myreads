import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './searchbar'
import SearchResults from './searchresults'

class SearchBooks extends Component {
  static PropTypes = {
    reshelve: PropTypes.func.isRequired
  }

  state = {
    books: []
  }

  render() {
    const { books } = this.state
    const { reshelve } = this.props

    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults books={books} reshelve={reshelve} />
      </div>
    )
  }
}

export default SearchBooks
