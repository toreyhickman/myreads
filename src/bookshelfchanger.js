import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    reshelve: PropTypes.func.isRequired
  }

  handleChange = (event) => this.props.reshelve(this.props.book, event.target.value)

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
