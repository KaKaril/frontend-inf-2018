import { Component, OnInit } from '@angular/core';
import {Instrument} from "../../model/Instrument";
import {InstrumentService} from "../../service/instrument/instrument.service";

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments: Instrument[];

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.getInstruments();
  }

  getInstruments (){
    this.instrumentService.getInstruments().subscribe(instruments => this.instruments = instruments);
  }
}
