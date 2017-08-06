import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import SearchBar from './searchbar'
import SearchResults from './searchresults'

class SearchBooks extends Component {
  static PropTypes = {
    reshelve: PropTypes.func.isRequired
  }

  state = {
    books: []
  }

  search = (searchTerms, maxResults = 50) => {
    if (!searchTerms) {
      this.resetSearchResults()
    } else {
      BooksAPI.search(searchTerms, maxResults).then((results) => {
        if (results.error) {
          this.resetSearchResults()
        } else {
          this.updateSearchResults(results)
        }
      })
    }
  }

  resetSearchResults = () => this.setState({books: []})

  updateSearchResults = (books) => {
    this.setState({books})
  }

  render() {
    const { books } = this.state
    const { reshelve } = this.props

    return (
      <div className="search-books">
        <SearchBar search={this.search} />
        <SearchResults books={books} reshelve={reshelve} />
      </div>
    )
  }
}

export default SearchBooks
