import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from '../../core/guards/auth.guard';
import { SignupComponent } from './signup/signup.component';
/*import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from '../../core/guards/auth.guard';*/

const routes: Routes = [
  {
    path: 'sign-in',
    component: SigninComponent,
    canActivate: [authGuard]
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
