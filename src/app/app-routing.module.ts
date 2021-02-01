import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent } from './events/events.component';
import {AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: EventsComponent},
  { path: 'about', component: AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
