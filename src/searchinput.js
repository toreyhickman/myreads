import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/

class SearchInput extends Component {
  static PropTypes = {
    search: PropTypes.func.isRequired
  }

  handleChange = (event) => this.props.search(event.target.value)

  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />
      </div>
    )
  }
}

export default SearchInput
