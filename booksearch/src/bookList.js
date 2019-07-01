import React from "react";
import Book from "./book";


class BookList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  updateBooklist = books => {
    this.setState({
      books
    });
    console.log(this.state)
  };

render(){
  const books = this.state.books.map(book => {
    return (
      <Book
        key={book.key}
        title={book.title}
        author={book.author}
        retailPrice={book.retailPrice}
        description={book.description}
        image={book.image}
      />
    );
  });

  return <ul>{books}</ul>;
}
}

export default BookList;
