import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const myKey= 'AIzaSyC7etpGfup0-A3HssAIzYe_mlljnOo4iPE';
    const searchTerm = this.state.searchTerm;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${myKey}`
    console.log(searchTerm);
    fetch(url)
      .then(response => {response.ok ? response.json() : Promise.reject(response.statusText)})
      .then(data => {
        console.log(Object.keys(data));
        this.setState = {

        }
      })
  }  

  searchTermUpdated = (searchTerm) => {
    console.log("State:", this.state);
    console.log("Search term:", searchTerm);
    this.setState({
      searchTerm
    }) 
     
        

  }

  render(){
    return (
      <div className="form">
        <form onSubmit= {(event)=> this.handleSubmit(event) }>
          <label htmlFor="search">Search</label>
          <input name="search"type="text" onChange={event => this.searchTermUpdated(event.target.value)} />
          <label name="">Book Type</label>
          <button type="submit"  >Search</button>
          <select>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="ebooks">E-Books</option>
            <option value="free-ebooks">Free E-Books</option>
            <option value="paid-ebooks">Paid E-Books</option>
          </select>
          <label name="">Print Type</label>
          <select>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Form;