const { Player } = require("./player");
const { FalseMoveException } =  require("./FalseMove");
const { FalsePosException } =  require("./FalsePos");
/**
   * status actual session 
   */
const StateGame = {
    PLAYING: 1,
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
    
    constructor(partyname,nameplayer1,nameplayer2) {
    /*  0 0 0  
        0 0 0
        0 0 0 */      
      Board = [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
      ];    
      this.partyname = partyname;
      this.player1 = new Player(nameplayer1);
      this.player2 = new Player(nameplayer2);
      this.player.setyoupattern(1);
      this.player2.setyoupattern(2);
      status = StateGame.PLAYING;
    }
    
    
    showBattle(){
      return "Actual Game from" + this.player1.name() + "Vs " + this.player2.name() ;
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
    }

    checkBoardState(pattern)
    {
        //search Patterns
      /*  0 0 0  
          0 0 0
          0 0 0 */ 
          // linear chances    
       
        for (let x = 0; x < Board.length; x++) {
            for (let y = 0; y < Board.length; y++) {
              if (this.Board[x][y]===0){
                continue;
              }
              if (this.Board[x][y]===pattern){
                continue;
              }
              
          }          
      }

    }
  }

  module.exports = Game;