import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './bookshelf'

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
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => < Bookshelf title={shelf.title} />)}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookcase
