import React, { Component } from "react";
import "./Articles.css";
import {Article} from "../Article/Article.js";

export class Articles extends Component {

  state = {
    articles: []
  }

  render() {

    return (
      <div>
        <Article />
      </div>
    );
  }
};