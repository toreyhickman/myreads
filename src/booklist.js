import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookListItem from './booklistitem'

class BookList extends Component {
  static PropTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    reshelve: PropTypes.func.isRequired
  }

  render() {
    const { books, reshelve } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book, i) => <BookListItem key={i} book={book} reshelve={reshelve} />)}
      </ol>
    )
  }
}

export default BookList
