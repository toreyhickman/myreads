import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class BookListItem extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    reshelve: PropTypes.func.isRequired
  }

  render() {
    const { book, reshelve } = this.props

    return (
      <li>
        <Book book={book} reshelve={reshelve} />
      </li>
    )
  }
}

export default BookListItem
