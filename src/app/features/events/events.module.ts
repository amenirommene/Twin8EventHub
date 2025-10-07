import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './pages/list-event/list-event.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailComponent,
    EventCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EventsModule { }
