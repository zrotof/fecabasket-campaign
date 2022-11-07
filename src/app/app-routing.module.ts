import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { DonateComponent } from './components/donate/donate.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProgramLongComponent } from './components/program-long/program-long.component';
import { ProgramShortComponent } from './components/program-short/program-short.component';
import { ProgramComponent } from './components/program/program.component';
import { ShareComponent } from './components/share/share.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: '', redirectTo: '', pathMatch: 'full' 
  },
  {
    path: 'agenda', 
    component: AgendaComponent
  },
  {
    path: 'programme', 
    component: ProgramComponent
  },
  {
    path: 'programme/version-courte', 
    component: ProgramShortComponent
  },
  {
    path: 'programme/version-longue', 
    component: ProgramLongComponent
  },
  {
    path: 'nous-contacter', 
    component: ContactComponent
  },
  {
    path: 'faire-un-don', 
    component: DonateComponent
  },
  {
    path: 'partager-la-campagne', 
    component: ShareComponent
  },
  {path: '**', component : NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
