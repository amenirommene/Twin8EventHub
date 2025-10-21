import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../../data-acess/services/events.service';
import { Eventy } from '../../../../models/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

  constructor(private ac:ActivatedRoute, private es:EventsService){
 console.log("je suis constructor");
  }
id! : number;
e? : Eventy;
  ngOnInit(){
    console.log("je suis ngOnInit");
   console .log(this.ac.snapshot.paramMap.get('id'));
 /* this.ac.paramMap.subscribe(params=>
    {this.id=Number(params.get('id'));
      let e =this.es.getEventById(this.id) ;
      this.e=e;
      console.log(this.id);
  });
   ;*/
  }


}
