var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get/myRecipes', function(req, res, next) {
  console.log('called!!!!!');

  res.json({"hits": [
          {"recipe1": "recipe1"},
          {"recipe1": "recipe1"},
          {"recipe1": "recipe1"},
          {"recipe1": "recipe1"},
          {"recipe1": "recipe1"},
          {"recipe1": "recipe1"},
          {"recipe1": "recipe1"},

      ]});
});

module.exports = router;
