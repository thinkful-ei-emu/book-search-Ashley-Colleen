import React from "react";
import './book.css'

function Book(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <p>Price: ${props.retailPrice}</p>
      <p>{props.description}</p>
      <img src={props.image} alt={"cover of " + props.title} />
    </li>
  );
}

export default Book;
