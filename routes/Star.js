var express = require('express');
var router = express.Router();

const Star_controlers = require('../controllers/Star');

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('Star', { title: 'Search Results Star' });
//});
router.get('/',Star_controlers.Star_view_all_Page);

/* GET detail star page */ 
router.get('/detail', Star_controlers.Star_view_one_Page); 

 //* GET create Star page */ 
router.get('/create', secured,Star_controlers.Star_create_Page); 

/* GET create update page */ 
router.get('/update', secured,Star_controlers.Star_update_Page);

/* GET create Star page */ 
router.get('/delete', secured,Star_controlers.Star_delete_Page); 
 
module.exports = router;
