import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './../model/person'


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input()  personToShow: Person;

  @Output() childChanged = new EventEmitter<Person>();

  informParent(){
    this.childChanged.emit(this.personToShow);
  }

  constructor() { }

  ngOnInit() {
  }

}
