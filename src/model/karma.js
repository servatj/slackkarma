const path = require('path');

const con = mysql.createConnection(config.get('mysql'));

const saveKarma = () => {

};

const listTop = () => {

}

const start = () => {
console.log("pre ")    ;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE event_aggregates.users (id VARCHAR(7) PRIMARY KEY, name VARCHAR(255), karma INTEGER";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    }
  });
}

module.exports = {
  createTable()
};
