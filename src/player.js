
/**
 * This contain all about Players info and they can do
 * 
 */
class Player {
    constructor(name,password,token) {
      this.name = name;
      this.password=password;
    this.token=token;
      this.pattern=0;
    }
    setyoupattern(number){
      this.pattern = number;
    }
    changename(namechang) {
      this.name=namechang;
    }
   
        
}
module.exports = Player;