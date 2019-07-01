import React from "react";
import "./App.css";
import Header from "./header";
import BookList from "./bookList";
import Form from "./form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.bookList = React.createRef();
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

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Header />
        <Form updateBooklist={this.bookList.updateBooklist} />
        <BookList
          ref={this.bookList}
         books = {this.state.books}
        />
      </div>
    );
  }
}

export default App;
