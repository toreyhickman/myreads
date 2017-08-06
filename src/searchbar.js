import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchInput from './searchinput'

class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <SearchInput />
      </div>
    )
  }
}

export default SearchBar
