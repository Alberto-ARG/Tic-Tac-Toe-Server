import {Player} from './player'

class Game {
    /*  0 0 0  
        0 0 0
        0 0 0 */
    Board = new [2][2];
    
    constructor(player,player2 ,partyname) {
      this.player = player;
      this.player2 = player2;
      this.partyname = partyname;
    }

    showBoard(){
    this.Board.forEach(element => {
      process.stdout.write(element);
    });

    }

    Shownames(){
      return "Actual Game from" + this.player.name + "Vs " + this.player2.name;
    }

    
  }

  module.exports = Game;