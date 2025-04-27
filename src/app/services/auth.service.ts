import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) {}

  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Usuario registrado:', userCredential.user);
      this.router.navigate(['/dashboard']); // Puedes redirigir donde quieras después de registrar
    } catch (error) {
      console.error('Error en registro:', error);
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Usuario logueado:', userCredential.user);
      this.router.navigate(['/dashboard']); // Puedes redirigir donde quieras después de login
    } catch (error) {
      console.error('Error en login:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log('Sesión cerrada');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
