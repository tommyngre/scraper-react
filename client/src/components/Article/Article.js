import React from "react";
import "./Article.css";

export const Article = props => (

  <div className="article-wrapper container">
    <h2>{props.title}</h2>
    <p>{props.summary}
      <span>
        <a target="_blank" href={props.url}>
          &raquo; more here &laquo;
        </a>
      </span>
    </p>
    <div className="add-note btn btn-primary" data-id={props._id}>
      <i className="fas fa-sticky-note"></i>
      Add to favs
    </div>
  </div>
)