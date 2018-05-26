import { Injectable } from '@angular/core';
import {Person} from './../model/person'
@Injectable({
  providedIn: 'root'
})
export class PersonService {

persons: Person[];
  constructor() {
  this.persons = [new Person("Janek", 1999), new Person("Franek", 1888), new Person("Zoha", 1966)];
}


  getPersons() {
    return this.persons;
  }

  addPerson(person :Person){
    this.persons.push(person);
  }
}
