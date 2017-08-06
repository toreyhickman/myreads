import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './bookshelf'

class BookShelves extends Component {
  static PropTypes = {
    bookshelves: PropTypes.arrayOf(PropTypes.object).isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    reshelve: PropTypes.func.isRequired
  }

  booksForShelf = (shelf) => this.props.books.filter(book => book.shelf === shelf.slug)

  render() {
    const { bookshelves, reshelve } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf, i) => <Bookshelf key={i} title={shelf.title} books={this.booksForShelf(shelf)} reshelve={reshelve} />)}
        </div>
      </div>
    )
  }
}

export default BookShelves
