import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isAdmin : boolean = true;
currentUser: User | null = null;
  isAuthenticated: boolean = false;
  private subscriptions = new Subscription();

  // Injection des services via le constructeur
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // S'abonner aux changements de l'utilisateur actuel
    this.subscriptions.add(
      this.authService.currentUser$.subscribe(user => {
        this.currentUser = user;
      })
    );

    // S'abonner aux changements de l'état d'authentification
    this.subscriptions.add(
      this.authService.isAuthenticated$.subscribe(isAuth => {
        this.isAuthenticated = isAuth;
      })
    );
  }

  ngOnDestroy(): void {
    // Nettoyer les abonnements pour éviter les fuites mémoire
    this.subscriptions.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }

}
