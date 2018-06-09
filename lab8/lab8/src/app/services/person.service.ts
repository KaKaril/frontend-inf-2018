import {Injectable} from '@angular/core';
import {Person} from './../model/person';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/').subscribe(obj => console.log(obj));
    this.persons = [new Person('Janek', 1999), new Person('Franek', 1888), new Person('Zoha', 1966)];
  }


  getPersons() {
    return this.persons;
  }

  addPerson(person: Person) {
    this.persons.push(person);
  }
}
