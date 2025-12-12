import { Component } from '@angular/core';
import { Eventy } from '../../../../models/event';
import { EventsService } from '../../../../data-acess/services/events.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.css'
})
export class MyEventsComponent {

constructor(private es:EventsService){}
 title : string = "Liste des évènements";
  rechercher : string = "rechecher évènement";
  prop1: string = "bonjour";
  propNgModel : string = "";
  list : Eventy[] = [];

  ngOnInit(){
   this.es.getEventsByOrganizerFromBackend(1)?.subscribe({
    next : (res)=>this.list=res ?? [],
    error: (e)=>{console.log(e.message),
      console.log("Message de mon erreur : " + e?.error?.message)
    },
    complete: ()=>console.log("terminé")
  });
}

getNewList(){
  this.es.getEventsByOrganizerFromBackend(1)?.subscribe({
    next : (res)=>this.list=res ?? [],
    error: (e)=>{console.log(e.message),
      console.log("Message de mon erreur : " + e?.error?.message)
    },
    complete: ()=>console.log("terminé")
  });
}
}
