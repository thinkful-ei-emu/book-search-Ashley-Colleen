import React from "react";
import Book from "./book";

function BookList(props) {
  const books = props.books.map(book => {
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

export default BookList;
