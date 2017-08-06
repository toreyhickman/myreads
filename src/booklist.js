import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookListItem from './booklistitem'

class BookList extends Component {
  static PropTypes = {
    books: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book, i) => <BookListItem key={i} book={book} />)}
      </ol>
    )
  }
}

export default BookList
