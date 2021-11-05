var express = require('express');
var router = express.Router();
var client_count = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('selector', { title: 'Selector' });
});

module.exports = router;