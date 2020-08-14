import React, { Component } from 'react';
import books from './../books.json';

class SingleBookView extends Component {
  constructor() {
    super();
    this.state = {
      book: null
    };
  }

  componentDidMount() {
    this.loadBook();
  }

  loadBook() {
    const id = this.props.match.params.id;
    const book = books.find(item => item.id === id);
    this.setState({
      book
    });
  }

  render() {
    return (
      <div>
        {this.state.book && (
          <>
            <h1>{this.state.book.name}</h1>
            <h3>{this.state.book.author}</h3>
            <h5>{this.state.book.date}</h5>
          </>
        )}
      </div>
    );
  }
}

export default SingleBookView;
