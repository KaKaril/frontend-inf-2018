import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InstrumentsComponent} from './component/instruments/instruments.component';
import {FormsModule} from '@angular/forms';
import { InstrumentDetailComponent } from './component/instrument-detail/instrument-detail.component';
import {MessagesComponent} from "./component/messages/messages.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import { InstrumentSearchComponent } from './component/instrument-search/instrument-search.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    InstrumentDetailComponent,
    MessagesComponent,
    DashboardComponent,
    InstrumentSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent
    ]
})
export class AppModule {
}
