import { Component } from '@angular/core';
import { Eventy } from '../../../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  isAdmin :  boolean = false;
  title : string = "Liste des évènements";
  rechercher : string = "rechecher évènement";
  prop1: string = "bonjour";
  propNgModel : string = "";
  Like(ev:Eventy){
    console.log("je suis la méthode like");
    ev.nbLikes ++;

  }
   list : Eventy[] = [
  {id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}

  ];

}
