import {Header} from "../components/Header/Header.js"
import {NoMatch} from "../components/NoMatch/NoMatch.js"
import {Footer} from "../components/Footer/Footer.js"
import React, { Component } from "react";
//import API from "../../utils/API";

export class NoMatchPage extends Component {
  state = {
  };

  render() {
    return (
      <div>
      <Header />
      <NoMatch />
      <Footer />
      </div>
    );
  }
}