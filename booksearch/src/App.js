import React from 'react';
import './App.css';
import Header from './header';
import BookList from './bookList';
import Form from './form';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // searchTerm: '',
      books : [],

    }
  }

  updateBooklist = (books) => {
    this.setState({
      books

    })
  } 
        
        
        

//---imageLinks.small = image
  render(){
    console.log(this.state);


return (
<div className='App'>
  <Header />
  <Form updateBooklist = {this.updateBooklist} />
  <BookList title="Jawz" author="Betty" retailPrice="100" description="something" image="www.google.com"/>

  </div>
)

  }
}

export default App;
