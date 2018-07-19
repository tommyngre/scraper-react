const router = require("express").Router();
const articleController = require("../controller/articleController.js");

//query mongo
// router.get('/', function (req, res, next) {
//   articleController.findAll()
// });

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