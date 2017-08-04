import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book
