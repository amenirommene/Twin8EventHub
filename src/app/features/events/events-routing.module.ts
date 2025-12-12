import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';
import { MyEventsComponent } from './pages/my-events/my-events.component';

const routes: Routes = [
  { path: '', component: EventsComponent, children:[ //children indique qu'il y a une router-outlet dans EventsComponent
  {path:'add', component:AddEventComponent},//localhost:4200/events/add
  //localhost:4200/events/update/1
  {path:'update/:id', component:AddEventComponent},
  {path:'participate/:id/:price', component:ParticipationFormComponent},//localhost:4200/events/participate/1/10
   //localhost:4200/events/myevents
  { path: 'myevents', component: MyEventsComponent},
  { path: '', component: ListEventComponent, children : [
   { path: ':id', component: EventDetailComponent },

   ] },
  ] } ,//composant racine du module events

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
