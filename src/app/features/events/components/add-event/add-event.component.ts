import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  eventForm!:FormGroup;
  ngOnInit(){
    this.eventForm = new FormGroup(
    {
      title: new FormControl("",[Validators.required, Validators.minLength(3)]),
      price: new FormControl(),
      description: new FormControl(),
      date:new FormControl(),
      nbPlaces:new FormControl(),
      imageUrl:new FormControl(),
      domaines : new FormArray([new FormControl()])

    }
  )
  }
  onSubmit(){}
  get domaines(){
    return this.eventForm.get('domaines') as FormArray;
  }

  addDomain(){
  this.domaines.push(new FormControl(''));
  }
}
