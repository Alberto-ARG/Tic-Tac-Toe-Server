const sqlite3 = require('sqlite3').verbose();

let db;

exports.openDB = async function()  {
     db = new sqlite3.Database('./db/games.db', (err) => {
        if (err) {
          return new Error('Db Failed');
        }
        console.log('Connected to the SQlite database.');
      });
}
exports.closeDB = async function(){
    db.close();
}