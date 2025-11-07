import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { AddEventComponent } from './components/add-event/add-event.component';

const routes: Routes = [
  { path: '', component: EventsComponent, children:[ //children indique qu'il y a une router-outlet dans EventsComponent
  {path:'add', component:AddEventComponent},//localhost:4200/events/add
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
