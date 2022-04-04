const express = require('express')
const Sequelize = require('sequelize')
const db = require('./queries');
const sequelize = new Sequelize('postgresql://postgres:postgres1@localhost:5432/ronin')

const app = express()

const port = 3000

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

sequelize

.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});

app.get('/athletes', db.getAthletes)
app.get('/athletes/:id', db.getAthleteById)
