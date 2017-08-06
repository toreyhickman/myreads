import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookcaseHeader from './bookcaseheader'
import Bookshelves from './bookshelves'
import SearchLink from './searchlink'

class Bookcase extends Component {
  static PropTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    reshelve: PropTypes.func.isRequired
  }

  state = {
    bookshelves: [
      { title: "Currently Reading", slug: "currentlyReading"},
      { title: "Want to Read", slug: "wantToRead"},
      { title: "Read", slug: "read" }
    ]
  }

  render() {
    const { bookshelves } = this.state
    const { books, reshelve } = this.props

    return (
      <div className="list-books">
        <BookcaseHeader />
        <Bookshelves bookshelves={bookshelves} books={books} reshelve={reshelve}/>
        <SearchLink />
      </div>
    )
  }
}

export default Bookcase
