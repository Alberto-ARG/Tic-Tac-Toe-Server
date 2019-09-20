
/**
 * This contain all about Players info and they can do
 * 
 */
class Player {
    constructor(name) {
      this.name = name;
      this.pattern=0;
    }
    setyoupattern(number){
      pattern = number;
    }
    changename(namechang) {
      this.name=namechang;
    }
    get name(){
      return name;
    }
    get pattern(){
      return pattern;
    }
    
}
module.exports = Player;