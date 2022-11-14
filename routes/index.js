var express = require('express');
var router = express.Router();
var products = require('../public/jsondata/products.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json(products);
});

module.exports = router;
