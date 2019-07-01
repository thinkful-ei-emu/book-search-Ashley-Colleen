import React from 'react';
import './App.css';
import Header from './header';
import BookList from './bookList';
import Form from './form';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books : [],

    }
  }

  handleSubmit(event){
    event.preventDefault();
    const myKey= 'AIzaSyC7etpGfup0-A3HssAIzYe_mlljnOo4iPE';
    const searchTerm = ''
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${myKey}`
    
    fetch(url)
      .then(response => {response.ok ? response.json() : Promise.reject(response.statusText)})
      
        
        
        

//---imageLinks.small = image
  render(){
return (
<div className='App'>
  <Header />
  <Form />
  <BookList title="Jawz" author="Betty" retailPrice="100" description="something" image="www.google.com"/>

  </div>
)

  }
}

export default App;
