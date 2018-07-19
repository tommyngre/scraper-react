import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {

  state = {
    query: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  search() {
    //    
  }

  render() {
    return (
      <div id="header-wrapper" className="text-center">
        <h1>New York Times Article Search</h1>
        {/* <form>
          <div className="form-group">
            <label for="search-box">Enter your search</label>
            <input 
            name="query"
            type="text" 
            className="form-control" 
            id="search-box" 
            aria-describedby="searchHelp" 
            placeholder="Search for good news!" 
            onChange={this.handleInputChange}
            onFormSubmit={this.search}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}
      </div>
    )
  }
};