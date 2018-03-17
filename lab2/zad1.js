// Stworz interfejs do tematu swojego, proste metody
// Dzidzina Music Shop
var lib = {};
"use strict"; // Funkcjonalność przeglądarki (HACK!), funkcje ktore uzywaja niezadeklarowanych zmienmych powodowaly blad wyklonania programu. Proba ich wyłapania.

lib.musicStore = ((function() {
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
            id: "001"
        },
        {
            name: "Pszemek",
            surname: "Kwaśny",
            id: "002"
        }
    ];

    return {
        showStaff: function() {
            return staff;
        },
        showAvaiableInstruments: function() {
            return instruments;
        },
        addNewInstrument: function(instrument) {
            if (instrument.type && instrument.amount > 0) {
                instruments.push(instrument)
                console.log("Added : " + instrument.type + " : " + instrument.amount);
            } else {
                console.log("Couldn't add instrument to store : "+ instrument);
            }
        },
        incrementInstrumentAmount: function(instrumentType) {
            instruments.map(function(item) {
                if (item.type === instrumentType) {
                    item.amount += 1;
                }
            });
        }
    };
})());

console.log(lib.musicStore.showStaff());
console.log(lib.musicStore.showAvaiableInstruments());
//Error
lib.musicStore.addNewInstrument("guitar");
lib.musicStore.addNewInstrument({
    type: "chopstickXXL",
    amount: 10
});
lib.musicStore.incrementInstrumentAmount("guitar");
console.log(lib.musicStore.showAvaiableInstruments());
