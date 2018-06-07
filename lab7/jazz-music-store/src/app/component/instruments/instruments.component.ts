import { Component, OnInit } from '@angular/core';
import {INSTRUMENTS} from "../../mocks-instruments";
import {Instrument} from "../../model/Instrument";

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments = INSTRUMENTS;

  selectedInttrument : Instrument;

  onSelect(instrument: Instrument): void {
    this.selectedInttrument = instrument;
  }
  constructor() { }

  ngOnInit() {
  }

}
