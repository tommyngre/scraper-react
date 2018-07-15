import React, { Component } from "react";
import "./Article.css";

export class Article extends Component {

  state = {
    // note: this.note,
    // _id: this._id,
    // title: this.title,
    // link: this.link,
    // summary: this.summary
  }

  render() {

    return (
      <div class="article-wrapper container">
        <h2>{this.props.title}</h2>
        <p>{this.props.summary}
          <span>
            <a target="_blank" href={this.props.href}>here</a>
          </span>
          &laquo;
        </p>
        <div class="add-note btn btn-primary" data-id={this.props._id}>
          <i class="fas fa-sticky-note"></i> Add a note
        </div>
        <div class="comments-wrapper" data-id="idWillGoHere">

          {/* Comments will be mapped here. */}

        </div>
      </div>
    );
  }
};