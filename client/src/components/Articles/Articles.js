import React, { Component } from "react";
import "./Articles.css";
import { Article } from "../Article/Article.js";
import test from "../../utils/test.json"

export class Articles extends Component {

  state = {
    articles: []
  }

  render() {

    return (
      <div>

        {test.map(element => {
          return (<Article 
          note = {element.note}
          _id = {element._id}
          title = {element.title}
          link = {element.link}
          summary = {element.summary}
          />)
        })
        }
      </div>
    );
  }
};