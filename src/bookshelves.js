import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './bookshelf'

class BookShelves extends Component {
  static PropTypes = {
    bookshelves: PropTypes.arrayOf(PropTypes.object),
    books: PropTypes.arrayOf(PropTypes.object)
  }

  booksForShelf = (shelf) => this.props.books.filter(book => book.shelf === shelf.slug)

  render() {
    const { bookshelves } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf, i) => <Bookshelf key={i} title={shelf.title} books={this.booksForShelf(shelf)} />)}
        </div>
      </div>
    )
  }
}

export default BookShelves
