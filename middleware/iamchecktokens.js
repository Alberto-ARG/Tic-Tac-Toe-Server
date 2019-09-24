var jwt = require('jsonwebtoken');
 
const secret = 'this is not secret';

async function authcheck (req,res,next) {
    //console.log();
    var token = req.cookies['auth'];
    //console.log(token);
    
    jwt.verify(token, secret, function(err, user) {
        if (err) {
          res.status(401).json({error: 'Token inválido'})
         
        } else {
            console.log(user);
            res.status(200);
            return;
        }
      })  
      next();
}

module.exports = authcheck;