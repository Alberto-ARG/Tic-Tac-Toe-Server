let sql = require('../middleware/sql')

let Game = require('../src/game')





/**
 * List all games
 * /games/list
 */
exports.list = async function (req,res,next){
    // get all games from DB    

    next();
}

/**
 *  make a new game 
 * 
 */
exports.newgame = async function (req,res,next){
    //post a new game
 console.log(req.body);
next();
}

/**
 * delete game sesion
 * 
 */
exports.delgame = async function (req,res,next){
   
}
/**
 * update a sessions
 * 
 */
exports.updategame = async function (req,res,next){
  
}