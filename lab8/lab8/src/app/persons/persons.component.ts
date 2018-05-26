import { Component, OnInit } from '@angular/core';
import { Person } from './../model/person';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {PersonService} from './../services/person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;
  myForm: FormGroup;
  imie: AbstractControl;
  yob: AbstractControl;

  constructor(fb: FormBuilder, private personService: PersonService) {
    this.myForm = fb.group({
      'imie' : ['podaj imie', Validators.compose([Validators.required, this.myImieValidator])],
      'yob' :['podaj rok urodzenia']
    });

    this.imie = this.myForm.controls['imie'];
    this.yob = this.myForm.controls['yob'];

    this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log('imie'))
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

  mySubmit(value: any){
      console.log(this.personService.getPersons().pop());

      let person = new Person(this.imie.value, this.yob.value);
      this.personService.addPerson(person);
      console.log(this.personService.getPersons().pop());


  }

myImieValidator(control :FormControl){

  if(control.value.match(/^Fra/i)){
    return {
      'franekValue' : true
    }
  }
}
}
