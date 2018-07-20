const db = require("../models/index");
const path = require("path");
const router = require("express").Router();
const articleController = require("../controller/articleController.js");

router.get('/api', function (req, res, next) {
  // let query = req.params.query;
  // console.log(query);

  db.Article.find(req,res).then( function(data){
    res.json(data);
  })

});

router.post('/api/articles', function (req, res, next) {
  articleController.create(req,res)
});

router.get('/api/articles/:id', function (req, res, next) {
  articleController.findById(req,res)
});


router.put('/api/articles/:id', function (req, res, next) {
  articleController.put(req,res)
});

//delete from database
router.delete('/api/articles/:id', function (req, res, next) {
  articleController.remove(req,res)
})

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;