import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User, AuthResponse, LoginRequest, RegisterRequest } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL de l'API backend
  private readonly API_URL = 'http://localhost:3000';

  // Clés pour stocker les données dans localStorage
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  // Observables pour l'état d'authentification
  private currentUserSubject = new BehaviorSubject<User | null>(this.getCurrentUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Injection des dépendances via le constructeur (plus simple pour les débutants)
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.checkAuthStatus();
  }

  /**
   * Inscription d'un nouvel utilisateur
   * @param registerData Les données d'inscription (email, password, etc.)
   * @returns Observable qui retourne la réponse avec l'utilisateur et le token
   */
  signUp(registerData: RegisterRequest): Observable<AuthResponse> {
    // Vérifier si l'email existe déjà
    return new Observable(observer => {
      // 1. Vérifier si l'utilisateur existe déjà
      this.http.get<User[]>(`${this.API_URL}/users?email=${registerData.email}`).subscribe({
        next: (users) => {
          // Si un utilisateur avec cet email existe déjà
          if (users.length > 0) {
            observer.error({ error: { message: 'Cet email est déjà utilisé' } });
            return;
          }

          // 2. Créer le nouvel utilisateur
          const newUser: User = {
            email: registerData.email,
            password: registerData.password,
            firstName: registerData.firstName,
            lastName: registerData.lastName,
            role: 'user'
          };

          this.http.post<User>(`${this.API_URL}/users`, newUser).subscribe({
            next: (user) => {
              // 3. Générer un token simple
              const token = this.generateToken(user);

              // 4. Sauvegarder les données dans localStorage
              this.setAuthData(user, token);

              // 5. Retourner la réponse
              const response: AuthResponse = {
                user: { ...user, password: '' }, // Ne pas renvoyer le mot de passe
                token: token
              };
              observer.next(response);
              observer.complete();
            },
            error: (error) => {
              observer.error(error);
            }
          });
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  /**
   * Connexion d'un utilisateur
   * @param loginData Les données de connexion (email et password)
   * @returns Observable qui retourne la réponse avec l'utilisateur et le token
   */
  signIn(loginData: LoginRequest): Observable<AuthResponse> {
    return new Observable(observer => {
      // Chercher l'utilisateur par email
      this.http.get<User[]>(`${this.API_URL}/users?email=${loginData.email}`).subscribe({
        next: (users) => {
          // Vérifier si l'utilisateur existe
          if (users.length === 0) {
            observer.error({ error: { message: 'Email ou mot de passe incorrect' } });
            return;
          }

          const user = users[0];

          // Vérifier si le mot de passe est correct
          if (user.password !== loginData.password) {
            observer.error({ error: { message: 'Email ou mot de passe incorrect' } });
            return;
          }

          // Générer un token
          const token = this.generateToken(user);

          // Sauvegarder les données dans localStorage
          this.setAuthData(user, token);

          // Retourner la réponse
          const response: AuthResponse = {
            user: { ...user, password: '' }, // Ne pas renvoyer le mot de passe
            token: token
          };
          observer.next(response);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  /**
   * Génère un token simple pour l'utilisateur
   * Note: En production, le token devrait venir du serveur (JWT)
   */
  private generateToken(user: User): string {
    const tokenData = {
      userId: user.id,
      email: user.email,
      role: user.role,
      timestamp: Date.now()
    };
    // Encoder en base64 (simple, pas sécurisé pour la production)
    return btoa(JSON.stringify(tokenData));
  }

  /**
   * Déconnexion de l'utilisateur
   */
  logout(): void {
    // Supprimer les données du localStorage
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);

    // Notifier les observables
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);

    // Rediriger vers la page d'accueil
    this.router.navigate(['/home']);
  }

  /**
   * Récupère le token depuis localStorage
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Récupère l'utilisateur actuel depuis localStorage
   */
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  /**
   * Vérifie si l'utilisateur est connecté
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && token !== '';
  }

  /**
   * Sauvegarde les données d'authentification dans localStorage
   */
  private setAuthData(user: User, token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    // Notifier les observables
    this.currentUserSubject.next({ ...user, password: '' });
    this.isAuthenticatedSubject.next(true);
  }

  /**
   * Vérifie l'état d'authentification au démarrage
   */
  private checkAuthStatus(): void {
    const isAuth = this.isLoggedIn();
    this.isAuthenticatedSubject.next(isAuth); ///???
    if (!isAuth) {
      this.currentUserSubject.next(null);
    }
  }
}
