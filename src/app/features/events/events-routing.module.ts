import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: EventsComponent, children:[ //children indique qu'il y a une router-outlet dans EventsComponent
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
