import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Eventy } from '../../../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
test : string = "Je suis la prorpriété du fils";
@Input() e! : Eventy;
@Output() likeClicked = new EventEmitter<Eventy>();
Like(e:Eventy){
this.likeClicked.emit(e);
}
}
