let sql = require('../middleware/sql')

const { body,validationResult,sanitizeBody,check } = require('express-validator');

/* middleware sanitizatio chain for new users post request
*
*/
exports.myValidators = [
  sanitizeBody('username').trim().escape(),

  sanitizeBody('password').trim().escape(),
  
  check('username')
      .isLength({ min:1 }).withMessage('Login is a required field.')
      .isAlphanumeric().withMessage('Login must be alphanumeric.'),
  check('password')
      .isLength({ min:8 }).withMessage('Password must be at least 8 characters in length.')
      .matches('\[0-9\]').withMessage('Password must contain at least 1 number.')
      .matches('\[a-z\]').withMessage('Password must contain at least 1 lowercase letter.')
      .matches('\[A-Z\]').withMessage('Password must contain at least 1 uppercase letter.')
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
    

 

