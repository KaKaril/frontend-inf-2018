import {Instrument} from "./model/Instrument";
import {Company} from "./model/enum/Company";

export const INSTRUMENTS: Instrument[] = [
  {
    id: 1,
    name: "Johns's black trumpet",
    yearOfProduction: 1999,
    amount: 11240,
    manufacturer:
      {
        companyName: Company.CASIO,
        yearOfEstate: 1988,
        worker: "John Kovalski1"
      }
  },

  {
    id: 2,
    name: "Johns's black alto Saxophone",
    yearOfProduction: 1199,
    amount: 1550,

    manufacturer:
      {
        companyName: Company.CASIO,
        yearOfEstate: 1918,
        worker: "John Kovalski2"
      }
  },
  {
    id: 3,
    name: "Johns's black universal instrument",
    yearOfProduction: 1999,
    amount: 103,
    manufacturer:
      {
        companyName: Company.SAMSUNG,
        yearOfEstate: 1988,
        worker: "John Kovalski3"
      }
  },
  {
    id: 4,
    name: "Johns's Bartyo Saxo",
    yearOfProduction: 1999,
    amount: 110,

    manufacturer:
      {
        companyName: Company.YAMAHA,
        yearOfEstate: 1988,
        worker: "John Kovalski4"
      }
  },

];
