import React from 'react';
import Book from './book';

function BookList(props){
return (
  <ul>
    <Book title={props.title}
    author={props.author}
    retailPrice={props.retailPrice}
    description={props.description}
    image={props.image}/>
  </ul>
)
}

export default BookList