const { Player } = require("./player");
const { FalseMoveException } =  require("./FalseMove");
const { FalsePosException } =  require("./FalsePos");
/**
   * status actual session 
   */
const StateGame = {
    WaitForPlayer : 0,
    PLAYING: 1,
    DRAW : 3,
    FINISH: 2,
};
 /**
   * Set Board and session name
   * 0 will be for empty
   * 1 will be for player1
   * 2 will be for player2
   * and in OutPut will say X or O
   */
class Game {   
    
   
    constructor(partyname,player) {
      /*  0 0 0  
          0 0 0
          0 0 0 */      
      this.Board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];    
        this.partyname = partyname;
        this.player1 = player;
        //this.player2 = new Player(nameplayer2);
        this.player1.setyoupattern(1);
        //this.player2.setyoupattern(2);
        this.status = StateGame.WaitForPlayer;
      }    
    setplayer2(player){
      this.player2 = player;
      this.player2.setyoupattern(2);
      this.status = StateGame.PLAYING;
    }
    
    /**
    * this is how the player make a move...
    * 
    */
    moveOn(posx,posy,ply){
      //check the pos if enter
      if(posx>2||posy>2) 
      {
       throw new FalsePosException("you cant move like that");
      }

      let pattern= ply.pattern();

      //is empty
     if(this.Board[posx][posy]===0)
     {
      this.Board[posx][posy]=pattern;
     }
     //is not empty
     else{
       //is the same ply ?
      if(this.Board[posx][posy]===pattern){
        throw new FalseMoveException('Wrong Move you are already mark that pos');
      }
       //is the enemy ply ? wrong
      else{
        throw new FalseMoveException('Wrong Move you can*t overwrite the enemy move');
      }
     }
     if(hasAwiner(pattern)){
       // a chapion here
       stopthegame(StateGame.FINISH)
     }
     else{
       // check if board is complete and if is draw de game
       if(checkboard()){
        ///set game draw
        stopthegame(StateGame.DRAW)
       }

     }
    }
    
    stopthegame(status){
      this.status=status;
    }

    checkboard() {
      for (let y = 0; index < Board.length; x++) {
        for (let x = 0; index < Board.length; y++) {
            if((Board[y][x]===0))
           {
              return false;
          }          
        }
      }
      
      return true;
    }
    hasAwiner(pattern) {
      //search Patterns
      /*  0 0 0 
          0 0 0
          0 0 0 */ 
      // linear check 
     if((Board[0][0]&&Board[0][1]&&Board[0][1])===pattern){
       return true;
     }
     if((Board[1][0]&&Board[1][1]&&Board[1][1])===pattern){
      return true;
    }
    if((Board[2][0]&&Board[2][1]&&Board[2][1])===pattern){
      return true;
    }
    // vertical check 
    if((Board[0][0]&&Board[1][0]&&Board[2][0])===pattern){
      return true;
    }
    if((Board[0][1]&&Board[1][1]&&Board[2][1])===pattern){
     return true;
    }
    if((Board[0][2]&&Board[1][2]&&Board[2][2])===pattern){
      return true;
    }
    // Diagonal check  
    if((Board[0][0]&&Board[1][1]&&Board[2][2])===pattern){
      return true;
    }
    if((Board[0][2]&&Board[1][1]&&Board[2][0])===pattern){
      return true;
    } 
      return false;
    }

  }

  module.exports = Game;