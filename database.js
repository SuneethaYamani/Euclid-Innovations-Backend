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
      } else {
        // Table just created, creating some rows
        var insert = 'INSERT INTO sensor_data (sensor_id,sensor_reading,timestamp) VALUES (?,?,?)'
        db.run(insert, ['temp123', 23, '1/1/2020'])
        db.run(insert, ['temp124', 20, '1/2/2020'])
        db.run(insert, ['temp125', 27, '1/3/2020'])
      }
    })
  }
})

module.exports = db
