const sqlite3 = require('sqlite3').verbose();

let db;

exports.openDB = async function()  {
     db = new sqlite3.Database('./db/games.sql', (err) => {
        if (err) {
          return new Error('Db Failed');
        }
        console.log('Connected to the SQlite database.');
        
      });
}
exports.closeDB = async function(){
    db.close();
}

exports.init= async function  () {
   
db.serialize(() => {
  // Queries scheduled here will be serialized.
  db.run('CREATE TABLE IF NOT EXISTS games (game_id INTEGER PRIMARY KEY,name_game TEXT NOT NULL,jugador_id TEXT NOT NULL,jugador2_id TEXT NOT NULL,state INT NOT NULL);');   
});
}

exports.newgame = async function  (name_game,jugador_id,jugador2_id,state) {
   
  db.serialize(() => {
    // Queries scheduled here will be serialized.
    db.run('INSERT INTO games (game_id,name_game,jugador_id,jugador2_id,state) VALUES ( null,'+name_game+','+jugador_id+','+jugador2_id+',+'+state+');');   
  });
  }