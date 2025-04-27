import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel,IonItem,IonIcon, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    name: string = '';
    phone: string = '';
    comuna: string = '';
    region: string = '';
    showPassword: boolean = false;
    showConfirmPassword: boolean = false;
    showPasswordIcon: string = 'eye-off-outline';
    showConfirmPasswordIcon: string = 'eye-off-outline';

    constructor(private router: Router) {}


    ngOnInit() {}

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showPasswordIcon = this.showPassword ? 'eye-outline' : 'eye-off-outline';
    }

    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
      this.showConfirmPasswordIcon = this.showConfirmPassword ? 'eye-outline' : 'eye-off-outline';
    }

    register() {
      console.log('Registro exitoso:', {
        email: this.email,
        password: this.password,
        name: this.name,
        phone: this.phone,
        comuna: this.comuna,
        region: this.region
      });
      // Redirigir a la página de inicio de sesión después del registro exitoso
       this.router.navigate(['/login']);
    }
}
