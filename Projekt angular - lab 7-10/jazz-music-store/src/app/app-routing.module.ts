import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstrumentDetailComponent} from "./component/instrument-detail/instrument-detail.component";
import {InstrumentsComponent} from "./component/instruments/instruments.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {InstrumentInsertComponent} from "./component/instrument-insert/instrument-insert.component";



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: InstrumentDetailComponent },
  {path: 'instruments', component: InstrumentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add-new', component: InstrumentInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
