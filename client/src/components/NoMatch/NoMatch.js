import React, { Component } from "react";
import "./NoMatch.css";

export class NoMatch extends Component {
  state = {
  }

  render() {

    return (
      <div className="article-wrapper container">
        <h2>Oops...</h2>
        <p>Nothing to see here. Might I recommend you head in <span>
            <a target="_blank" href="/">this direction</a>
            ?
          </span>
        </p>
      </div>
    );
  }
};