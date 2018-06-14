// Klasa ogólna do sklepu plus sklep muzyczny jako klasa rozszerzajaca.
//////////////////////////////////////
// Zmienne
var instruments = [{
        type: "guitar",
        amount: 5
    }, {
        type: "drum",
        amount: 1
    }, {
        type: "bass",
        amount: 10
    },
    {
        type: "chopstick",
        amount: 0
    }
];

var staff = [{
        name: "Piotr",
        surname: "Piotrkowski",
        id: "001",
        isPresent : true
    },
    {
        name: "Pszemek",
        surname: "Kwaśny",
        id: "002",
        isPresent : true
    },
    {
        name: "Janusz",
        surname: "Nowack",
        id: "003",
        isPresent : false
    },
    {
        name: "Grazyna",
        surname: "Nowack",
        id: "004",
        isPresent : false
    }
];

////////////////////////////////////////////////////////
// Klasy

function Store(staff) {
    this.staff = staff;
}

Store.prototype = {
    getStaff: function() {
        return this.staff;
    },
    getPresentStaff: function(){
      var presentStaff = this.staff.filter(function(person){
        return person.isPresent;
      });
      return presentStaff;
    }
}

function MusicStore(staf, instruments) {
    Store.call(this, staf);
    this.instruments = instruments;
}

MusicStore.prototype = Object.create(Store.prototype);
MusicStore.prototype.constructor = MusicStore;
MusicStore.prototype.showAvaiableInstruments = function() {
    return instruments;
};
MusicStore.prototype.addNewInstrument = function(instrument) {
    if (instrument.type && instrument.amount > 0) {
        instruments.push(instrument)
        console.log("Added : " + instrument.type + " : " + instrument.amount);
    } else {
        console.log("Couldn't add instrument to store : " + instrument);
    }
};
MusicStore.prototype.incrementInstrumentAmount = function(instrumentType) {
    instruments.map(function(item) {
        if (item.type === instrumentType) {
            item.amount += 1;
        }
    });
}

////////////////////////////////////////////////////////
// Dzialanie
var basicStore = new Store(staff);
console.log(basicStore.getStaff());

console.log("Today at the store are : ");
var presentStaff = basicStore.getPresentStaff();
presentStaff.forEach(function(person){
  console.log(person.name + " " + person.surname);
})

var musicStore = new MusicStore(staff, instruments);
musicStore.addNewInstrument({
    type: "microphone",
    amount: 25
});
musicStore.incrementInstrumentAmount("microphone")
console.log(musicStore.showAvaiableInstruments());
console.log(musicStore.getStaff());
