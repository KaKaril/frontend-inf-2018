import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  searchControl = new FormControl();

  searchItems: string[] = [];


  constructor() {
    this.searchControl.valueChanges.subscribe(
       searchTerm => {
         this.searchItems.push(searchTerm);
       }
    );
  }

  ngOnInit() {

  }



}
