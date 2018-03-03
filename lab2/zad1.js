// Stworz interfejs do tematu swojego, proste metody
// Dzidzina Music Shop

var lib = {};

lib.musicStore = (function(){
  var instruments = [
    {
      type: "guitar",
      amount : 5
    },{
      type: "drum",
      amount: 1
    },{
      type:"bass",
      amount:10
    },
    {
      type: "chopstick",
      amount: 0
    }
  ]

  var staff = [{
    name : "Piotr",
    surname: "Piotrkowski",
    id: 001
  },
  {
    name : "Pszemek",
    surname : "Kwaśny",
    id: 002
  }]

  return {
    showStaff: function() {
        return staff;
    },
    showAvaiableInstruments: function(){
      return instruments;
    },
    addInstrument: function(instrument){
      instruments.filter(function(item){
        if(item.type === instrument){
          item.amount +=1;
        }
      });
    }
  };
})();

console.log(lib.musicStore.showStaff());
console.log(lib.musicStore.showAvaiableInstruments());
lib.musicStore.addInstrument("guitar");
lib.musicStore.addInstrument("chopstick");

console.log(lib.musicStore.showAvaiableInstruments());
