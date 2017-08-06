import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './booklist'

class Bookshelf extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList books={books} />
        </div>
      </div>
    )
  }
}

export default Bookshelf
