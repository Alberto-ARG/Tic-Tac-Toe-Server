const sqlite3 = require('sqlite3').verbose();

var db;

exports.openDB = async function()  {
     db = new sqlite3.Database('./db/games.sql', (err) => {
        if (err) {
          return new Error('Db Failed');
        }
        else{
          console.log('Connected to the SQlite database.');
        }
      });
}
exports.closeDB = async function(){
    db.close();
}

exports.init= async function  () {
   
db.parallelize(() => {
  
  db.run('CREATE TABLE IF NOT EXISTS games (game_id INTEGER PRIMARY KEY,name_game TEXT NOT NULL,jugador_id TEXT NOT NULL,jugador2_id TEXT NOT NULL,state INT NOT NULL);');
  db.run('CREATE TABLE IF NOT EXISTS users (userid INTEGER PRIMARY KEY ,username TEXT NOT NULL UNIQUE,password TEXT NOT NULL, victorias INT NOT NULL,derrotas INT NOT NULL,empates INT NOT NULL);');
   
});
}

exports.newgame = async function  (name_game,jugador_id,jugador2_id,state) {
   
  db.serialize(() => {    
    db.run('INSERT INTO games (game_id,name_game,jugador_id,jugador2_id,state) VALUES ( null,'+name_game+','+jugador_id+','+jugador2_id+',+'+state+');');   
  });
  }










  
  /* 
  *
  * insert a new user
  * 
  * */
exports.userNew = async function (playername,password,error) {  
    
   let sql = `INSERT INTO users (userid, username, password, victorias, derrotas, empates) VALUES(null,"${playername}", "${password}",0,0,0);`;
  db.run(sql,[],
    (err)=>{
      if(err){
        error({err});
        return;
      }
      else{
        error({});
      }
    });    
}

/* 
  *
  * Get All Users Registers
  * 
  * 
  */
exports.getallusers = async function  (resultado) {
   
      let sql = 'SELECT * FROM users';
 
          db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            resultado({rows});
          });   
  }

exports.finduser = async function  (playername,password,result) {
  let sql = `SELECT * FROM USERS WHERE USERNAME="${playername}" AND PASSWORD= "${password}" ;`;
 
  db.get(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
    if (typeof row === 'undefined'){
      result(false);
    }
    else{
     if( row.username==playername &&  row.password==password){
      result(true);
     }
     else{result(false);}
      
    }
    
  });   
}

  
      
  