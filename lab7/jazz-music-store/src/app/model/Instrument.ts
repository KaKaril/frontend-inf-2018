import {Manufacturer} from "./Manufacturer";

export interface Instrument {
  id: number;
  name: string;
  amount: number;
  yearOfProduction: number;
  manufacturer?:  Manufacturer;
}
