const Pool = require('pg').Pool
const env = process.env
const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
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