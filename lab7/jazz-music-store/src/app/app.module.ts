import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InstrumentsComponent} from './component/instruments/instruments.component';
import {FormsModule} from '@angular/forms';
import { InstrumentDetailComponent } from './component/instrument-detail/instrument-detail.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    InstrumentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent
    ]
})
export class AppModule {
}
