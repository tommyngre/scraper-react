const db = require("../models");
var axios = require('axios');
var cheerio = require('cheerio');

module.exports = {
  scrape: function(req, res) {
    console.log("scrapin")
    axios.get("https://slashfilm.com/").then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      // Now, we grab every h2 within an article tag, and do the following:
      $("div.post").each(function (i, element) {
        // Save an empty result object
        var result = {};

        //grab data, assign to result object
        result.title = $(this)
          .find(".title-info")
          .find("h1")
          .find("a")
          .attr("title")

        result.link = $(this)
          .find(".title-info")
          .find("h1")
          .find("a")
          .attr("href")

        result.summary = ($(this).children("p").text()) || "";

        console.log("IN",result);

        db.Article.findOneAndUpdate({ title: result.title },result,{upsert: true})
          .then(function (data) {
            console.log("OUT",data);
          })
          .catch(function (err) {
            return res.json(err);
          });
      });
      res.send("Scrape Complete");
    });

  },
  findAll: function(req, res) {
    // db.Book
    //   .find({}) //req.query
    //   .sort({ _id: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  findAllApi: function(req,res) {
    res.json(req);
  }
}