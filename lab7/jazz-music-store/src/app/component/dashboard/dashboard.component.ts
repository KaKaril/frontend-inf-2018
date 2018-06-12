import { Component, OnInit } from '@angular/core';
import {Instrument} from "../../model/Instrument";
import {InstrumentService} from "../../service/instrument/instrument.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  instruments: Instrument[] = [];

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.getInstruments();
  }

  getInstruments(): void {
    this.instrumentService.getInstruments()
      .subscribe(instruments => this.instruments = instruments.slice(0, 5));
  }
}
