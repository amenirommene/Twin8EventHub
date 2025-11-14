import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../../shared/validators/futur-date.validator';

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
      title: new FormControl("",[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
      price: new FormControl("",[Validators.pattern("^\\d+(\\.\\d+)?$")]),
      description: new FormControl("",[Validators.required, Validators.minLength(30)]),
      date:new FormControl("", [Validators.required,futurDateValidator(7)]),
      nbPlaces:new FormControl("", [Validators.required, Validators.pattern("")]),
      imageUrl:new FormControl("", [Validators.required]),
      domaines : new FormArray([new FormControl("",Validators.required)]),
      address: new FormGroup({

      })

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
