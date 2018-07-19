import React, { Component } from "react";
import "./Articles.css";
import { Article } from "../Article/Article.js";
import API from "../../utils/API.js"

export class Articles extends Component {

  state = {
    query: "",
    results: [],
    noResults: false,
  }

  handleFormSubmit = event => {
    console.log("handleFormSubmit");
    event.preventDefault();
    let { query } = this.state;
    this.getArticles(query)
  };

  getArticles = query => {
    //TODO: clears previous results

    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest?"
    let term = query
    let key = `&api-key=d9e945f34b04448ba1570afa8cedd901`

    //TODO: err handle query (e.g. certain special chars)

    url += `&q=${term}${key}`
    console.log(url);

    API
      .queryNYT(url)
      .then(results => {
        console.log(results.data)

        this.setState({
          results: results.data,
          query: "",
        });

      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div>

        <form className="text-center" onFormSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Enter your search</label>
            <input
              name="query"
              type="text"
              className="form-control"
              id="search-box"
              aria-describedby="searchHelp"
              placeholder="Search for good news!"
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {this.state.results.map(article => {
          return (
            <Article
              key={article.web_url}
              title={article.headline.main}
              url={article.web_url}
              summary={article.snippet}
              date={article.pub_date}
              type="Save"
            // onClick={() => this.save(article)}
            />
          )
        })
        }
      </div>
    );
  }
};