import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';
import { MyEventsComponent } from './pages/my-events/my-events.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailComponent,
    EventCardComponent,
    SearchBarComponent,
    AddEventComponent,
    ParticipationFormComponent,
    MyEventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EventsModule { }
