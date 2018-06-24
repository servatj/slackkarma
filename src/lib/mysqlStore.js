
module.exports = () => {
  const createDatabase  = (mysql, dbName) => {
      mysql.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`, (err, content) => {
          if (err) throw err
          console.log(`New Database`)
      })
  } 

  return Object.freeze({
    createDatabase: createDatabase,
  });
}


