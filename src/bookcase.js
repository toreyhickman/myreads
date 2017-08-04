import React, { Component } from 'react'
import BookcaseHeader from './bookcaseheader'
import Bookshelf from './bookshelf'
import SearchLink from './searchlink'

class Bookcase extends Component {
  state = {
    shelves: [
      { title: "Currently Reading"},
      { title: "Want to Read"},
      { title: "Read" }
    ]
  }

  render() {
    return (
      <div className="list-books">
        <BookcaseHeader />
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => < Bookshelf title={shelf.title} />)}
          </div>
        </div>
        <SearchLink />
      </div>
    )
  }
}

export default Bookcase
