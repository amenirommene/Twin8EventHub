import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventsService } from '../../data-acess/services/events.service';
import { Router, RouterModule } from '@angular/router';
import { Eventy } from '../../models/event';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
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
