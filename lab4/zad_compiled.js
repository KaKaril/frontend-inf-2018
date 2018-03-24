"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Zrobic klasy z uzyciem es6
// -> dziedziczenie - uzyte TAK
// -> lambda - uzyte ? TAK
// -> template string - uzyte ? TAK
// -> default - uzyte ? TAK
// -> let - uzyte ? TAK
// -> iterator uzyte ?
var instruments = [{
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
var staff = [{
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

var BasicStore = function () {
    function BasicStore(staff) {
        _classCallCheck(this, BasicStore);

        this.staff = staff;
    }

    _createClass(BasicStore, [{
        key: "getStaff",
        value: function getStaff() {
            return this.staff;
        }
    }, {
        key: "getPresentStaff",
        value: function getPresentStaff() {
            return this.staff.filter(function (person) {
                return person.isPresent;
            });
        }
    }]);

    return BasicStore;
}();

var MusicStore = function (_BasicStore) {
    _inherits(MusicStore, _BasicStore);

    function MusicStore(staff, instruments) {
        _classCallCheck(this, MusicStore);

        var _this = _possibleConstructorReturn(this, (MusicStore.__proto__ || Object.getPrototypeOf(MusicStore)).call(this, staff));

        _this.instruments = instruments;
        return _this;
    }

    _createClass(MusicStore, [{
        key: "showAvaiableInstruments",
        value: function showAvaiableInstruments() {
            return this.instruments;
        }
    }, {
        key: "addNewInstrument",
        value: function addNewInstrument() {
            var instrument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "empty boxes for instruments", amount: 100 };

            if (instrument.type && instrument.amount > 0) {
                instruments.push(instrument);
                console.log("Added : " + instrument.type + " in number of " + instrument.amount);
            } else {
                console.log("Couldn't add instrument to store : " + instrument);
            }
        }
    }, {
        key: "incrementInstrumentAmount",
        value: function incrementInstrumentAmount(instrumentType) {
            instruments.map(function (item) {
                if (item.type === instrumentType) {
                    item.amount += 1;
                }
            });
        }
    }]);

    return MusicStore;
}(BasicStore);

var basicStore = new BasicStore(staff);
basicStore.getPresentStaff().forEach(function (person) {
    return console.log(person.name + " " + person.surname);
});

var musicStore = new MusicStore(staff, instruments);
console.log(musicStore.showAvaiableInstruments());
musicStore.getPresentStaff().forEach(function (person) {
    return console.log(person.name + " " + person.surname);
});
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
