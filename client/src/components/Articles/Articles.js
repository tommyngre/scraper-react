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

  componentDidMount() {
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      query: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let {query} = this.state;
    this.getArticles(query)
  };

  getArticles = query => {
    //TODO: clears previous results

    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    let key = `&api-key=d9e945f34b04448ba1570afa8cedd901`
    url += `q=${query}${key}`

    //TODO: err handle query (e.g. certain special chars)
    API
      .queryNYT(url)
      .then(results => {
        console.log("results.data.response.docs",results.data.response.docs)

        this.setState({
          results: results.data.response.docs,
          query: "",
        });

      })
      .catch(err => console.log(err))
  }

  saveArticle = article => {
    console.log(article)
    API.save(article).then(results => {
      console.log(results)
    })
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div>

        <form className="text-center">
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
          <button 
          type="submit" 
          className="btn btn-primary"
          onClick={this.handleFormSubmit}
          >Submit</button>
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
              onClick={() => this.saveArticle(article)}
            />
          )
        })
        }
      </div>
    );
  }
};