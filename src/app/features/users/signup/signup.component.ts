import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 // Données du formulaire d'inscription
  registerData: RegisterRequest = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  // Confirmation du mot de passe
  confirmPassword: string = '';

  // Message d'erreur à afficher
  errorMessage: string = '';

  // Indicateur de chargement
  isLoading: boolean = false;

  // Injection des services via le constructeur (plus simple pour les débutants)
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Méthode appelée lors de la soumission du formulaire
   */
  onSubmit(): void {
    // 1. Vérifier que les champs obligatoires sont remplis
    if (!this.registerData.email || !this.registerData.password) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires';
      return;
    }

    // 2. Vérifier que les mots de passe correspondent
    if (this.registerData.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    // 3. Vérifier la longueur minimale du mot de passe
    if (this.registerData.password.length < 6) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
      return;
    }

    // 4. Afficher le chargement et effacer les erreurs précédentes
    this.isLoading = true;
    this.errorMessage = '';

    // 5. Appeler le service d'authentification
    this.authService.signUp(this.registerData).subscribe({
      // Succès : rediriger vers la page d'accueil
      next: () => {
        this.router.navigate(['/home']);
        this.isLoading = false;
      },
      // Erreur : afficher le message d'erreur
      error: (error) => {
        this.errorMessage = error.error?.message || 'Erreur lors de l\'inscription';
        this.isLoading = false;
      }
    });
  }

}
