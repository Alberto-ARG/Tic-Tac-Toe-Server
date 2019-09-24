let sql = require('../middleware/sql')

const { body,validationResult,sanitizeBody,check } = require('express-validator');


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
exports.newUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  else{
    res.send(req.body);
  }
  
  
}

/* get all Users
*
*/
exports.list = async function (req,res,next){
  
}
    

 

