let sql = require('../middleware/sql')
var jwt = require('jsonwebtoken');

//make this env and set before start compiling this for god practices...

const secret = 'this is not secret';
const { validationResult,sanitizeBody,check } = require('express-validator');

/* middleware  will sanitize chain for new users post request
*
*/
exports.myValidators = [
  sanitizeBody('username').trim().escape(),

  sanitizeBody('password').trim().escape(),
  
  check('username')
      .isLength({ min:4}).withMessage('Login is a required field.')
      .isAlphanumeric().withMessage('Login must be alphanumeric.'),
  check('password')
      .isLength({ min:8 }).withMessage('Password must be at least 8 characters in length.')
      .matches('\[0-9\]').withMessage('Password must contain at least 1 number.')
      .matches('\[a-z\]').withMessage('Password must contain at least 1 lowercase letter.')
      .matches('\[A-Z\]').withMessage('Password must contain at least 1 uppercase letter.')
]
exports.checkinput = [
  sanitizeBody('username').trim().escape(),
    
  sanitizeBody('password').trim().escape(),

  check('username').isLength({ min:4 }),
  check('password').isLength({ min:8 }),
]


/* create a new user
*
*/
exports.newUser = async (req, res,next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  else{
    // the username can be replicated this is a an error
    sql.userNew(req.body.username,req.body.password,(error) =>{
      if (typeof error !== 'undefined'){        
        return res.status(200).json({name: req.body.username, password :req.body.password})
      }
      
      console.log(error);     
      res.status(500).json({error});
    })
   
  }
  
  
}

/* get all Users
*
*/
exports.list = async function (req,res,next){
  sql.getallusers((rows)=>{    
    res.send(rows);
  });
}
    
exports.login = async function  (req,res,next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  sql.finduser(req.body.username,req.body.password,(result) => {
    if(result){
      console.log(result);
      var token = jwt.sign({ username: req.body.username,password : req.body.password }, secret,{ 'expiresIn' : '1 Days'});
      res.cookie('auth' , token, {'maxAge': new Date(Date.now() + 900000)});   
      return res.status(200).json({token: token});     
    }
    else{
      return res.status(400).json({ error : 'invalid user or password' });
      
    }
  })

 
  
}