var express = require('express');
var router = express.Router();

var userf = require('../controllers/userfun')

/* GET All Users
* 
*/
router.get('/',userf.list);

/* New User
* 
*/
router.post('/new',userf.myValidators,userf.newUser);


module.exports = router;
