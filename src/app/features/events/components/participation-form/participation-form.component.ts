import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent {

  price : number = 0;
  constructor(private ac:ActivatedRoute){}

  ngOnInit(){
    this.ac.paramMap.subscribe(
      res=>this.price=Number(res.get('price')))
  }

}
