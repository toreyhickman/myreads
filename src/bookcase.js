import React, { Component } from 'react'
import BookcaseHeader from './bookcaseheader'
import Bookshelves from './bookshelves'
import SearchLink from './searchlink'

class Bookcase extends Component {
  state = {
    bookshelves: [
      { title: "Currently Reading"},
      { title: "Want to Read"},
      { title: "Read" }
    ]
  }

  render() {
    const { bookshelves } = this.state

    return (
      <div className="list-books">
        <BookcaseHeader />
        <Bookshelves bookshelves={bookshelves} />
        <SearchLink />
      </div>
    )
  }
}

export default Bookcase
