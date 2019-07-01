import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="form">
        <form>
          <label for="search">Search</label>
          <input name="search"type="text"/>
          <label name="">Book Type</label>
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