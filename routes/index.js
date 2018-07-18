const router = require("express").Router();
const articleController = require("../controller/articleController.js");

//query mongo
router.get('/api/articles', function (req, res, next) {
  console.log("get");
  articleController.get()
});

//save to mongo
router.post('/api/articles', function (req, res, next) {
  console.log("hello world");
  res.json({"hello": "post"})
});

//delete from database
router.delete('/api/articles', function (req, res, next) {
  res.json({"hello": "delete"})
})

module.exports = router;