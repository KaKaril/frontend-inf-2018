import {Component, OnInit, Input} from '@angular/core';
import {Instrument} from "../../model/Instrument";
import {ActivatedRoute} from "@angular/router";
import {InstrumentService} from "../../service/instrument/instrument.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.css']
})
export class InstrumentDetailComponent implements OnInit {

  @Input() instrument: Instrument;

  constructor(private route: ActivatedRoute,
              private instrumentService: InstrumentService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getInstrument();
  }


  getInstrument(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.instrumentService.getInstrument(id)
      .subscribe(instrument => this.instrument = instrument);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.instrumentService.updateInstrument(this.instrument)
      .subscribe(() => this.goBack());
  }

}
