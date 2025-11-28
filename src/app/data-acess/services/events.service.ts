import { Injectable } from '@angular/core';
import { Eventy } from '../../models/event';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiEventsUrl : string="http://localhost:3000/events";

  constructor(private _http:HttpClient) { }

  list : Eventy[]=[{id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}];

getEventById(id:number): Eventy | undefined {
  return this.list.find(e=>e.id===id)  ;
}

getAllEventsFromBackend():Observable<HttpResponse<Eventy[]> > {
      return this._http.get<Eventy[]>(this.apiEventsUrl, {observe:'response'}).
      pipe(
        catchError((er:HttpErrorResponse)=>
          {return throwError(()=>er)}
      ))
}
}
