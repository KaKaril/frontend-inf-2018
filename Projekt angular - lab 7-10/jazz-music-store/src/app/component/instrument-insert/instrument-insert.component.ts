import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms';
import {InstrumentService} from '../../service/instrument/instrument.service';
import {Instrument} from '../../model/Instrument';
import {Manufacturer} from "../../model/Manufacturer";
import {Company} from "../../model/enum/Company";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-instrument-insert',
  templateUrl: './instrument-insert.component.html',
  styleUrls: ['./instrument-insert.component.css']
})
export class InstrumentInsertComponent implements OnInit {

  newInstrumentForm: FormGroup;
  name: AbstractControl;
  amount: AbstractControl;
  yearOfProduction: AbstractControl;
  companyName: AbstractControl;
  yearOfEstate: AbstractControl;
  worker: AbstractControl;
  companyNames: Company[] = [Company.SAMSUNG, Company.YAMAHA, Company.CASIO]

  constructor(private route: ActivatedRoute, fb: FormBuilder, private instrumentService: InstrumentService,  private location: Location) {
    this.newInstrumentForm = fb.group({
      'name': ['Set instrument name', Validators.compose([Validators.required])],
      'amount': ['Set amount', Validators.compose([Validators.required])],
      'yearOfProduction': ['Set year of production', Validators.compose([Validators.required])],
      'companyName': ['Set company name', Validators.compose([Validators.required])],
      'yearOfEstate': ['Set company year of estate', Validators.compose([Validators.required])],
      'worker': ['Set instrument creator name', Validators.compose([Validators.required])],
    });
    this.name = this.newInstrumentForm.controls['name'];
    this.amount = this.newInstrumentForm.controls['amount'];
    this.yearOfProduction = this.newInstrumentForm.controls['yearOfProduction'];
    this.companyName = this.newInstrumentForm.controls['companyName'];
    this.yearOfEstate = this.newInstrumentForm.controls['yearOfEstate'];
    this.worker = this.newInstrumentForm.controls['worker'];
  }

  ngOnInit() {
  }

  submitInstrument(value: any) {
    const manufactuer = new Manufacturer(value.companyName, value.yearOfEstate, value.worker);
    const instrument = new Instrument(value.name, value.amount, value.yearOfProduction, manufactuer);
    console.log(instrument);
    this.instrumentService.updateInstrument(instrument).subscribe(() => this.goBack());;
  }
  goBack(): void {
    this.location.back();
  }

}
