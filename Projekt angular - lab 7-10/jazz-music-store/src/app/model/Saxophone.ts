import {Instrument} from "./Instrument";
import {SaxophoneType} from "./enum/SaxophoneType";

export class Saxophone implements Instrument {
  amount: number;
  id: number;
  name: string;
  yearOfProduction: number;
  saxoType : SaxophoneType;

}
