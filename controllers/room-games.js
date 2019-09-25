let sql = require('../middleware/sql');

let Game = require('../src/game');

let Player = require('../src/player');

let utils = require('../middleware/utils');

const { validationResult,sanitizeBody,check } = require('express-validator');

exports.newgameinputcheck = [
    sanitizeBody('namegame').trim().escape(),   
    check('namegame').isLength({ min:4 }),
  ]

/**
 * List all games
 * /games/list
 */
exports.list = async function (req,res,next){
    // get all games from DB    
   
}

/**
 *  make a new game 
 * 
 */
exports.newgame = async function (req,res,next){
    //Check input
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  let token = req.cookies['auth']
  //get user from token   
  utils.getUserFromToken(token,(user)=>{
    let  player = new Player(user.username,user.password,token);
    let game = new Game(req.body.namegame,player);
        utils.gamesinMemory.push(game);
        return res.status(200).json({ Msj: 'Game'+ req.body.namegame + ' is created' });
    }).catch(err => res.status(500).json({ error: err }));
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

/**
 * see yours games
 * 
 */
exports.getgames = async function (req,res,next){
  
}