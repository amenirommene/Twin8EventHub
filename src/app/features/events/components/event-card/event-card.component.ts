import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Eventy } from '../../../../models/event';
import { EventsService } from '../../../../data-acess/services/events.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  constructor(private es:EventsService, private _router:Router){}
test : string = "Je suis la prorpriété du fils";
@Input() e! : Eventy;
@Output() likeClicked = new EventEmitter<Eventy>();
@Output() deleteClicked = new EventEmitter<Eventy>();
Like(e:Eventy){
this.likeClicked.emit(e);
}

delete(e:Eventy){
this.es.deleteEventFromBackend(e.id).subscribe(()=>this.deleteClicked.emit());
}
}
