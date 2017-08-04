import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './bookshelfchanger'

class Book extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }

  render() {
    const { title, author, thumbnail } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${thumbnail})`}}></div>
          <BookshelfChanger />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book
