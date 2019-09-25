var jwt = require('jsonwebtoken');
const secret = 'this is not secret';
exports.getUserFromToken =  async (token,userreturn) => {
        jwt.verify(token, secret, function(err, user) {
        if (err) {
         userreturn({})
        } else {
            userreturn({user})
        }
      })
}

exports.gamesinMemory=[];