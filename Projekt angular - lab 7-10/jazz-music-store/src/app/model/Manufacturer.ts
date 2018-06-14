export class Manufacturer {
  companyName: string;
  yearOfEstate: number;
  worker?: string;

  constructor(companyName: string, yearOfEstate: number, worker: string) {
    this.companyName = companyName;
    this.yearOfEstate = yearOfEstate;
    this.worker = worker;
  }

}
