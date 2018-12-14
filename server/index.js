const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config()

const controller = require('./controller')

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    res.status(500).send(console.log('Error on initial massive call to CONNECTION_STRING', err))
})

app.get('/api/houser', controller.readAll)
app.post('/api/houser', controller.addHouse)
app.delete('/api/houser/:id', controller.delete)

const PORT = 3008
app.listen(PORT, () => console.log(`Ship docked at port ${PORT}`))