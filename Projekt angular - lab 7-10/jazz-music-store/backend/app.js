const express = require('express') , bodyParser = require('body-parser');

var cors = require('cors')


const app = express()
app.use(cors());
app.use(bodyParser.json());


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


app.put('/api/instruments', (req, res) => {
  console.log(req.body.id);
  var instrument_id = req.body.id;
  var instrumentToUpdate = INSTRUMENTS.filter(instrument => instrument.id == instrument_id);


  console.log(instrumentToUpdate);
  if(instrumentToUpdate.size > 0 ){
    INSTRUMENTS.map(instrument => {
      if(instrument.id == instrument_id){
        console.log("Updating existing instrument--------------------");
        console.log(INSTRUMENTS);
        console.log("------------------------------------------------")
     //   res.send(202);
      instrument.amount = req.body.amount;
      instrument.name = req.body.name;
      instrument.yearOfProduction = req.body.yearOfProduction;
      instrument.manufacturer = req.body.manufacturer;

    }
    return instrument;
  })}
  else{
    console.log("Adding new instrument");

    INSTRUMENTS.push(req.body);
    console.log("Added new instrument");
   // res.send(202);
  }
  res.send({status:200});
 // console.log(INSTRUMENTS)
})

