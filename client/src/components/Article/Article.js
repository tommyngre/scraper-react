import React, { Component } from "react";
import "./Article.css";

export class Article extends Component {

  state = {
    title: '',
    url: '',
    description: ''
  }

  render() {

    return (
      <div class="article-wrapper container">
        <h2>Here's Where A Title Will Go</h2>
        <p>Here's where a summary will go.
          <span>
            <a target="_blank" href="">here</a>
          </span>
          &laquo;
        </p>
        <div class="add-note btn btn-primary" data-id="idWillGoHere">
          <i class="fas fa-sticky-note"></i> Add a note
        </div>
        <div class="comments-wrapper" data-id="idWillGoHere">

          {/* Comments will be mapped here. */}

        </div>
      </div>
    );
  }
};