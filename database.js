var sqlite3 = require('sqlite3').verbose()


const DBSOURCE = 'iot.db'

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE sensor_data(
        sensor_id  VARCHAR(32) PRIMARY KEY,
        sensor_reading INT,
        timestamp DATETIME
     )`,
    (err) => {
      if (err) {
        // Table already created
        console.log('table already created')
      } 
        // Table just created, creating some rows
        var insert = 'INSERT INTO sensor_data (sensor_id,sensor_reading,timestamp) VALUES (?,?,?)'
        db.run(insert, ['temp2', 13, '3/1/2020'])
        db.run(insert, ['temp1', 20, '3/2/2020'])
        db.run(insert, ['temp0', 37, '3/3/2020'])
     
    })
  }
})

module.exports = db
