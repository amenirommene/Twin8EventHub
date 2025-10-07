import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isAdmin : boolean = false;
cAdmin : string= "navbar navbar-expand-lg bg-dark navbar-dark border-bottom shadow-sm";
cNotAdmin : string = "navbar navbar-expand-lg bg-light navbar-light border-bottom shadow-sm";
}
