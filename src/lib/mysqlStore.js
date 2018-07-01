
module.exports = () => {
  const createDatabase  = (mysql, dbName) => {
      mysql.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`, (err, content) => {
          if (err) throw err
          console.log(`New Database Created`)
      })
  } 

  const createTable = (mysql, ddl, tbname) => {
    mysql.query(ddl, (err, content) => {
        if (err) throw err
        console.log(`New table ${tbname} Created`)
    })
  } 

  return Object.freeze({
    createDatabase,
    createTable
  });
}


