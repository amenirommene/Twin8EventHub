import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../data-acess/services/events.service';
import { Eventy } from '../../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  OnInit{
  list: Eventy[] = [];
  constructor(private es:EventsService) {}
  ngOnInit(){
    this.es.getAllEventsFromBackend().subscribe(
      res=>this.list=res.body?.sort((a,b)=>b.nbLikes-a.nbLikes).slice(0,3) || []
    );
  }
}
