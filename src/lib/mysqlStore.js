
module.exports = () => {
  const createDatabase  = (mysql, dbName) => {
      mysql.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`, (err, content) => {
          if (err) throw err
          console.log(`New Database Created`)
      })
  } 

  const createTable = (mysql, tbMame, schema) => {
    mysql.query(`CREATE TABL IF NOT EXISTS ${tbName};`, (err, content) => {
        if (err) throw err
        console.log(`New Database Created`)
    })
  } 


  return Object.freeze({
    createDatabase,
    createTable
  });
}


