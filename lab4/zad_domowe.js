// Zrobic klasy z uzyciem es6
// -> dziedziczenie - uzyte TAK
// -> lambda - uzyte ? TAK
// -> template string - uzyte ? TAK
// -> default - uzyte ? TAK
// -> let - uzyte ? TAK
// -> iterator uzyte ?
let instruments = [{
  type: "guitar",
  amount: 5
}, {
  type: "drum",
  amount: 1
}, {
  type: "bass",
  amount: 10
}, {
  type: "chopstick",
  amount: 0
}];
let staff = [{
  name: "Piotr",
  surname: "Piotrkowski",
  id: "001",
  isPresent: true
}, {
  name: "Pszemek",
  surname: "Kwaśny",
  id: "002",
  isPresent: true
}, {
  name: "Janusz",
  surname: "Nowack",
  id: "003",
  isPresent: false
}, {
  name: "Grazyna",
  surname: "Nowack",
  id: "004",
  isPresent: false
}];

class BasicStore {
  constructor(staff) {
    this.staff = staff;
  }
  getStaff() {
    return this.staff
  }

  getPresentStaff() {
    return this.staff.filter(person => person.isPresent);
  }
}

class MusicStore extends BasicStore {
  constructor(staff, instruments) {
    super(staff);
    this.instruments = instruments;
  }
  showAvaiableInstruments() {
    return this.instruments;
  }

  addNewInstrument(instrument = {
    type: "empty boxes for instruments",
    amount: 100
  }) {
    if (instrument.type && instrument.amount > 0) {
      instruments.push(instrument)
      console.log(`Added : ${instrument.type} in number of ${instrument.amount}`);
    } else {
      console.log(`Couldn't add instrument to store : ${instrument}`);
    }
  }

  incrementInstrumentAmount(instrumentType) {
    instruments.map(item => {
      if (item.type === instrumentType) {
        item.amount += 1;
      }
    });
  }
}


var basicStore = new BasicStore(staff);
basicStore.getPresentStaff().forEach(person => console.log(`${person.name} ${person.surname}`));

var musicStore = new MusicStore(staff, instruments);
console.log(musicStore.showAvaiableInstruments());
musicStore.getPresentStaff().forEach(person => console.log(`${person.name} ${person.surname}`));
musicStore.addNewInstrument({
  type: "microphone",
  amount: 25
});
// bad instrument
musicStore.addNewInstrument("BAD INSTRUMENT");
musicStore.incrementInstrumentAmount("microphone");
console.log(musicStore.showAvaiableInstruments());

//default
musicStore.addNewInstrument();
console.log(musicStore.showAvaiableInstruments());
