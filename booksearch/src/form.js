import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filterBook: "partial",
      filterPrint: "all",
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const myKey = "AIzaSyC7etpGfup0-A3HssAIzYe_mlljnOo4iPE";
    const searchTerm = this.state.searchTerm;
    const filterPrint = this.state.filterPrint;
    const filterBook = this.state.filterBook;
    
    
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${filterPrint}&filter=${filterBook}&key=${myKey}`
       

    console.log(searchTerm);
    fetch(url)
      .then(response =>
        response.ok ? response.json() : Promise.reject(response.statusText)
      )
      .then(data => {
        
        this.setState({searchTerm : ''})
        
        console.log(this.state)
        const books = [];
        data.items.map(book => {
        book = {
            key: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            retailPrice: book.saleInfo.retailPrice ?  book.saleInfo.retailPrice.amount : 'Price unavailable',
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
          };
          books.push(book);          
        })
        this.props.updateBooklist(books);        
       
      })
      
          
  };
  

  searchTermUpdated = (searchTerm) => {
    this.setState({
      searchTerm
    });
  };

  filterSelectedBookType = (filterBook)=>{
    this.setState({
     filterBook   
    });
  }
  filterSelectedPrintType = (filterPrint)=>{
    this.setState({
     filterPrint   
    });
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="search">Search</label>
          <input
            name="search"
            type="text"
            value= {this.state.searchTerm}
            onChange={event => this.searchTermUpdated(event.target.value)}
          />
          <button type="submit">Search</button>
          <label name="">Book Type</label>
          <select onChange={event => {
            this.filterSelectedBookType(event.target.value)}}>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="ebooks">E-Books</option>
            <option value="free-ebooks">Free E-Books</option>
            <option value="paid-ebooks">Paid E-Books</option>
          </select>
          <label name="">Print Type</label>
          <select onChange={event=>this.filterSelectedPrintType(event.target.value)}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
