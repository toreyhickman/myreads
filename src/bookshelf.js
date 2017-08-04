import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './booklist'

class Bookshelf extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const { title } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList />
        </div>
      </div>
    )
  }
}

export default Bookshelf
