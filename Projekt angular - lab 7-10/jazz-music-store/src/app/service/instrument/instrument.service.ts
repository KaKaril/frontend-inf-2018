import {Injectable} from '@angular/core';
import {Instrument} from "../../model/Instrument";
import {Observable, of} from "rxjs/index";
import {catchError, tap} from "rxjs/internal/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message/message.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class InstrumentService {

  private instrumentsUrl = 'http://localhost:3000/api/instruments';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  /** GET instruments from the server */
  getInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(this.instrumentsUrl)
      .pipe(
        tap(instruments => this.log(`fetched instruments`)),
        catchError(this.handleError('getInstruments', []))
      );
  }


  /** GET instrument by id. Will 404 if id not found */
  getInstrument(id: number): Observable<Instrument> {
    const url = `${this.instrumentsUrl}/${id}`;
    return this.http.get<Instrument>(url).pipe(
      tap(instrument => this.log(`fetched instrument id=${id} amount : ${instrument.amount}`)),
      catchError(this.handleError<Instrument>(`error with getinstrument id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message} http code : ${error.status}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a InstrumentService message with the MessageService */
  private log(message: string) {
    this.messageService.add('InstrumentService: ' + message);
  }

  /* GET instruments whose name contains search term */
  searchInstruments(term: string): Observable<Instrument[]> {
    if (!term.trim()) {
      // if not search term, return empty instrument array.
      return of([]);
    }
    return this.http.get<Instrument[]>(`${this.instrumentsUrl}/name=${term}`).pipe(
      tap(_ => this.log(`found instruments matching "${term}"`)),
      catchError(this.handleError<Instrument[]>('searchinstruments', []))
    );
  }


  /** PUT: update the instrument on the server */
  updateInstrument(instrument: Instrument): Observable<any> {
    return this.http.put(this.instrumentsUrl, instrument, httpOptions).pipe(
      tap(_ => this.log(`updated instrument id=${instrument.id}`)),
      catchError(this.handleError<any>('updateInstrument'))
    );
  }
}
