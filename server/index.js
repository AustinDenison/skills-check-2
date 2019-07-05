require('dotenv').config()
const express = require('express')
const massive = require('massive')
const Controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/inventory', Controller.getAll)

app.post('/api/inventory', Controller.create)

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    
    app.listen(SERVER_PORT, () => {
        console.log(`server is listening on ${SERVER_PORT}`)
    })
})


