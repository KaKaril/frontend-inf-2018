const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => res.send({name : "hello worlds"}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))