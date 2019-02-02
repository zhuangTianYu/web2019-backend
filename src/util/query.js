const mysql = require('mysql')
const dbConfig = require('../config/db.config')

const pool = mysql.createPool(dbConfig)

const query = (sql, callback) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error !== null) {
        throw error
        return reject(error)
      }
      connection.query(sql, (error, result) => {
        if (error !== null) {
          throw error
          reject(error)
        } else {
          resolve(result)
          callback(result)
        }
        connection.release()
      })
    })
  })
}

module.exports = query
