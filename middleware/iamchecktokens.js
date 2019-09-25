var jwt = require('jsonwebtoken');
 
const secret = 'this is not secret';

async function authcheck (req,res,next) {
    
    var token = req.cookies['auth'];
    jwt.verify(token, secret, function(err, user) {
        if (err) {
          res.status(401).json({error: 'This Token is Invalid Re-Login in'})
        } else {
           // console.log(user);
            res.status(200);
            next();
        }
      })
}

module.exports = authcheck;