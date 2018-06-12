import {Component, OnInit} from '@angular/core';
import {Instrument} from "../../model/Instrument";
import {Observable, Subject} from "rxjs/index";
import {InstrumentService} from "../../service/instrument/instrument.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/internal/operators";

@Component({
  selector: 'app-instrument-search',
  templateUrl: './instrument-search.component.html',
  styleUrls: ['./instrument-search.component.css']
})
export class InstrumentSearchComponent implements OnInit {
  instruments$: Observable<Instrument[]>;
  private searchTerms = new Subject<string>();

  constructor(private instrumentService: InstrumentService) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.instruments$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.instrumentService.searchInstruments(term)),
    );
  }
}
