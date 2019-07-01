import React from "react";
import "./App.css";
import Header from "./header";
import BookList from "./bookList";
import Form from "./form";

class App extends React.Component {
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
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Header />
        <Form updateBooklist={this.updateBooklist} />
        <BookList
         books = {this.state.books}
        />
      </div>
    );
  }
}

export default App;
