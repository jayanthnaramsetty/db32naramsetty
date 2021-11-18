var express = require('express');
var router = express.Router();

const Star_controlers = require('../controllers/star');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Star', { title: 'Search Results Star' });
});

/* GET detail star page */ 
router.get('/detail', Star_controlers.Star_view_one_Page); 
 
module.exports = router;
