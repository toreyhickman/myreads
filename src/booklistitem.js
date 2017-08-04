import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class BookListItem extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book } = this.props
    const thumbnail = book.imageLinks.thumbnail
    const title = book.title
    const author = book.authors[0]

    return (
      <li>
        <Book title={title} author={author} thumbnail={thumbnail} />
      </li>
    )
  }
}

export default BookListItem
