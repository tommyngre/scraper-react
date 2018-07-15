const router = require("express").Router();
const articleController = require("../controller/articleController.js");

// Matches with "/api/books"
router.route("/")
  .get(articleController.findAll)
// .post(articleController.create);

router.route("/api")
  .get(articleController.findAllApi)

router.route("/scrape")
  .get(articleController.scrape)

module.exports = router;