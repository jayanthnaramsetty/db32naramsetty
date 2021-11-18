var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Star_controller = require('../controllers/Star'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Star ROUTES /// 
 
// POST request for creating a Star.  
router.post('/Star', Star_controller.Star_create_post); 
 
// DELETE request to delete Star. 
router.delete('/Star/:id', Star_controller.Star_delete); 
 
// PUT request to update Star. 
router.put('/Star/:id', 
Star_controller.Star_update_put); 
 
// GET request for one Star. 
router.get('/Star/:id', Star_controller.Star_detail); 
 
// GET request for list of all Star items. 
router.get('/Star', Star_controller.Star_list); 
 
module.exports = router; 