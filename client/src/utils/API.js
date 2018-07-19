import axios from "axios";

export default {
  // Gets all books
  getArticles: function () {
    return axios.get("/api/articles");
  },
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  delete: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  save: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  queryNYT: function (queryUrl) {
    return axios.get(queryUrl);
  }
};
