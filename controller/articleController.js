const db = require("../models");
var axios = require('axios');
var cheerio = require('cheerio');

module.exports = {
  get: function (req, res) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "d9e945f34b04448ba1570afa8cedd901",
      'q': query
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (result) {
      console.log(result);
    }).fail(function (err) {
      throw err;
    });

  },
  post: function (req, res) {
    console.log("findin")
  },
  delete: function (req, res) {
    console.log("json")
  }
}