import { Component, OnInit } from '@angular/core';
import { Person } from './../model/person'
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;
  constructor() {
    this.persons = [new Person('Bolek', 1999), new Person('Lolek', 1998)];
  }

  selectPerson(person: Person){
    this.selectedPerson = person;
  }

  detailsChanged(person: Person){
    console.log(`Children changed : ${person.name}`);
  }
  ngOnInit() {
  }

}
