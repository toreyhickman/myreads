import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SearchInput from './searchinput'

class SearchBar extends Component {
  static PropTypes = {
    search: PropTypes.func.isRequired
  }

  render() {
    const { search } = this.props

    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <SearchInput search={search} />
      </div>
    )
  }
}

export default SearchBar
