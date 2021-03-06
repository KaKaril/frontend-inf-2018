const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => res.send({name : "hello worlds"}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


const INSTRUMENTS = [
    {
        id: 1,
        name: "Johns's black trumpet",
        yearOfProduction: 1999,
        amount: 3,
        manufacturer:
            {
                companyName: "Casio",
                yearOfEstate: 1918,
                worker: "John Kovalski"
            }

    },

    {
        id: 2,
        name: "Johns's black alto Saxophone",
        yearOfProduction: 1199,
        amount: 1,

        manufacturer:
            {
                companyName: "Yamaha",
                yearOfEstate: 1918,
                worker: "Albert Mueller"
            }
    },
    {
        id: 3,
        name: "Johns's black universal instrument",
        yearOfProduction: 1999,
        amount: 2,
        manufacturer:
            {
                companyName: "Samsung",
                yearOfEstate: 1988,
                worker: "Johnson Albaquerke"
            }
    },
    {
        id: 4,
        name: "Johns's Bartyo Saxo",
        yearOfProduction: 1999,
        amount: 1,

        manufacturer:
            {
                companyName: "D&D",
                yearOfEstate: 1988,
                worker: "RJ Simpson"
            }
    }
];


app.get('/api/instruments/?name=:name',(req, res) => {
    let instrument_name = req.params.name;
console.log(instrument_name);
res.send(INSTRUMENTS.filter( instrument => instrument.name.includes( instrument_name)))});

app.get('/api/instruments/',(req, res) => res.send(INSTRUMENTS));



app.get('/api/instruments/:id',(req, res) => {
    let instrument_id = req.param("id");
res.send(INSTRUMENTS.find( instrument => instrument.id == instrument_id))});




