const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ronin',
  password: 'postgres1',
  port: 5432,
})

const getAthletes = (request, response) => {
    pool.query('SELECT * FROM athlete', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getAthleteById = (request, response) => {
    const {id} = request.params

    pool.query(`SELECT * FROM athlete WHERE athlete_id = ${id}`, (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

module.exports = {
    getAthletes,
    getAthleteById
}