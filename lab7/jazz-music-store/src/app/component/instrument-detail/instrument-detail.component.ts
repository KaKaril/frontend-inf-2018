import { Component, OnInit, Input } from '@angular/core';
import {Instrument} from "../../model/Instrument";

@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.css']
})
export class InstrumentDetailComponent implements OnInit {

  @Input() instrument:Instrument;
  constructor() { }

  ngOnInit() {
  }

}
