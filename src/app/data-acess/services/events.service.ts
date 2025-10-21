import { Injectable } from '@angular/core';
import { Eventy } from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  list : Eventy[]=[{id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}];

getEventById(id:number): Eventy | undefined {
  return this.list.find(e=>e.id===id)  ;
}
}
