import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PersonService} from './services/person.service';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailsComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
