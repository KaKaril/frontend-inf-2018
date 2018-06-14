import {Manufacturer} from './Manufacturer';

export class Instrument {
  id: number;
  name: string;
  amount: number;
  yearOfProduction: number;
  manufacturer?: Manufacturer;

  constructor(name: string, amount: number, yearOfProduction: number, manufacturer?: Manufacturer) {
    this.id =  Math.floor(Math.random() * 1000000);
    this.name = name;
    this.amount = amount;
    this.yearOfProduction = yearOfProduction;
    this.manufacturer = manufacturer;
  }
}
