import {Header} from "../components/Header/Header.js"
import {Articles} from "../components/Articles/Articles.js"
import {Footer} from "../components/Footer/Footer.js"
import React, { Component } from "react";
//import API from "../../utils/API";

export class Main extends Component {
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
      <Header />
      <Articles />
      <Footer />
      </div>
    );
  }
}