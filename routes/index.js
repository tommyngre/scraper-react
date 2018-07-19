const router = require("express").Router();
const articleController = require("../controller/articleController.js");

router.get('/', function (req, res, next) {
  // let query = req.params.query;
  // console.log(query);
  articleController.findAll()
});

router.post('/api/articles', function (req, res, next) {
  articleController.create()
});

router.get('/api/articles/:id', function (req, res, next) {
  articleController.findById()
});


router.put('/api/articles/:id', function (req, res, next) {
  articleController.put()
});

//delete from database
router.delete('/api/articles/:id', function (req, res, next) {
  articleController.remove()
})

module.exports = router;