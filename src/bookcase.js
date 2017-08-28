import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookcaseHeader from './bookcaseheader'
import Bookshelves from './bookshelves'
import SearchLink from './searchlink'

class Bookcase extends Component {
  static PropTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    reshelve: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.defineBookshelves();
  }

  defineBookshelves = () => {
    this.bookshelves = [
      { title: "Currently Reading", slug: "currentlyReading"},
      { title: "Want to Read", slug: "wantToRead"},
      { title: "Read", slug: "read" }
    ]
  }

  render() {
    const bookshelves = this.bookshelves
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
