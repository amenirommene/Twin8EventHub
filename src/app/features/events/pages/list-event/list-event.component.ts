import { Component, ViewChild } from '@angular/core';
import { Eventy } from '../../../../models/event';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EventsService } from '../../../../data-acess/services/events.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent {
  constructor(private es:EventsService){}
  @ViewChild(EventCardComponent) eventcard! : EventCardComponent;
  isAdmin :  boolean = false;
  title : string = "Liste des évènements";
  rechercher : string = "rechecher évènement";
  prop1: string = "bonjour";
  propNgModel : string = "";
  list : Eventy[] = [];
  Like(ev:Eventy){
    console.log("je suis la méthode like");
    ev.nbLikes ++;

  }
  ngOnInit(){
   this.es.getAllEventsFromBackend().subscribe({
    next : (res)=>this.list=res,
    error: (e)=>{console.log(e),console.log("Message de mon erreur : " + e?.error?.message)
    },
    complete: ()=>console.log("terminé")
  });
  }


  ngAfterViewInit(){
  console.log(this.eventcard.test);
  }

}
