import React from "react";
import './book.css'

function Book(props) {
  return (
    <li>
      <h2>{this.props.title}</h2>
      <h3>{this.props.author}</h3>
      <p>{this.props.retailPrice}</p>
      <p>{this.props.description}</p>
      <img src={this.props.image} alt={"cover of" + this.props.title} />
    </li>
  );
}

export default Book;
