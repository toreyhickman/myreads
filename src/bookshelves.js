import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './bookshelf'

class BookShelves extends Component {
  static PropTypes = {
    bookshelves: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const { bookshelves } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map(shelf => < Bookshelf title={shelf.title} />)}
        </div>
      </div>
    )
  }
}

export default BookShelves
