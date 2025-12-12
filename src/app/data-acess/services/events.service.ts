import { Injectable } from '@angular/core';
import { Eventy } from '../../models/event';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ErrorService } from '../../sheared/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiEventsUrl : string="http://localhost:3000/events";

  constructor(private _http:HttpClient, private serviceError:ErrorService) { }

  list : Eventy[]=[{id:1, title:"Angular Summit", description:"Conférence sur Angular et l’écosystème front-end", date:new Date("2025-11-10"), place:"Tunis", price:50, organizerId:1,imageUrl:"images/event1.PNG", nbPlaces:25, nbLikes:0 },
  {id:2, title:"Web dev days", description:"Journée dédiée aux frameworks web modernes.", date:new Date("2025-01-05"), place:"Ariana",price:30, organizerId:1,imageUrl:"images/event2.PNG", nbPlaces:0, nbLikes:0}];

getEventById(id:number): Eventy | undefined {
  return this.list.find(e=>e.id===id)  ;
}

getAllEventsFromBackend():Observable<HttpResponse<Eventy[]> > {
      return this._http.get<Eventy[]>(this.apiEventsUrl, {observe:'response'}).
      pipe(
         catchError((error:HttpErrorResponse)=>
          this.serviceError.handleError(error))
      )
}

addEventToBackend(e:Eventy):Observable<Eventy> {
      return this._http.post<Eventy>(this.apiEventsUrl,e).
      pipe(
         catchError((error:HttpErrorResponse)=>
          this.serviceError.handleError(error))
      )
}
updateEventInBackend(e:Eventy):Observable<Eventy> {
      return this._http.put<Eventy>(this.apiEventsUrl+"/"+e.id,e).
      pipe(
         catchError((error:HttpErrorResponse)=>
          this.serviceError.handleError(error))
      )
}
deleteEventFromBackend(id:number):Observable<Eventy> {
      return this._http.delete<Eventy>(this.apiEventsUrl+"/"+id).
      pipe(
         catchError((error:HttpErrorResponse)=>
          this.serviceError.handleError(error))
      )
}

getEventsByOrganizerFromBackend(organizer:number):Observable<Eventy[]>{
return this._http.get<Eventy[]>(this.apiEventsUrl+"?organizerId="+organizer).
      pipe(
         catchError((error:HttpErrorResponse)=>
          this.serviceError.handleError(error))
      )
}
getExpensivesEvents():Observable<{ title: string; finalPrice: number }[]> {
      return this._http.get<Eventy[]>(this.apiEventsUrl).
      pipe(
        map(events => events.filter(e => e.price > 50)),
        map(events => events.map(e => ({
        title: e.title,
        finalPrice: e.price * 1.2
      }))
    ),
        catchError(() => of([]))
      )
}
}
