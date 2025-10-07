import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';

const routes: Routes = [
  { path: '', component: EventsComponent, children:[
   { path: '', component: ListEventComponent }
  ] } ,//composant racine du module events

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
