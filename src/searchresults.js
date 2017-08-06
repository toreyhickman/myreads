import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './booklist'

class SearchResults extends Component {
  static PropTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    reshelve: PropTypes.func.isRequired
  }

  render() {
    const { books, reshelve } = this.props

    return (
      <div className="search-books-results">
        <BookList books={books} reshelve={reshelve} />
      </div>
    )
  }
}

export default SearchResults
