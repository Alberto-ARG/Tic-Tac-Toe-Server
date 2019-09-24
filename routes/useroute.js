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
/*
*
* Generate token and set cookies for walkaround in api . 
*/
router.post('/login',userf.checkinput,userf.login);


module.exports = router;
