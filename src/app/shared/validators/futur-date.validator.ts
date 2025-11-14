
import { AbstractControl,ValidationErrors, ValidatorFn } from "@angular/forms";


export function futurDateValidator(days : number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    const minDate = new Date(today.setDate(today.getDate() + days));
    if (isNaN(selectedDate.getTime()) || selectedDate < minDate) {
      return { futureDateInvalid: 'La date doit être dans le futur, minimum ' + days +' jours à partir d\'aujourd\'hui.' };
    }

    return null;
  };
}
/*@Directive({
  selector: '[futurdate]',
  providers: [{provide: NG_VALIDATORS, useExisting: FuturDateValidatorDirective, multi: true}],
})
export class FuturDateValidatorDirective implements Validator {
  export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//  @Input('appForbiddenName') forbiddenName = '';
  validate(control: AbstractControl): ValidationErrors | null {
   return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    const minDate = new Date(today.setDate(today.getDate() + 7)); // Minimum 7 jours dans le futur
    console.log("test"+minDate);
    // Si la date est invalide ou pas dans le futur avec un minimum de 7 jours
    if (isNaN(selectedDate.getTime()) || selectedDate < minDate) {
      return { futureDateInvalid: 'La date doit être dans le futur, minimum 7 jours à partir d\'aujourd\'hui.' };
    }

    return { futureDateInvalid: 'La date doit être dans le futur, minimum 7 jours à partir d\'aujourd\'hui.' };  // Si la date est valide
  }
  }
}*/
