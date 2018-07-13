import React, { Component } from "react";
//import API from "../../utils/API";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class Scraper extends Component {
  state = {
    something: [],
  };

  // componentDidMount() {
  //   this.loadUp();
  // }

  // loadUp = () => {
  //   API.getStuff()
  //     .then(res =>
  //       this.setState({})
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteStuff = id => {
  //   API.deleteStuff(id)
  //     .then(res => this.loadStuff())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveStuff({})
  //       .then(res => this.loadStuff())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <h1>Here's stuff</h1>
      </div>
    );
  }
}

export default Scraper;
