import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem, IonIcon, CommonModule, FormsModule ]
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  register() {
    if (this.password !== this.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    this.authService.register(this.email, this.password);
  }

  handleLogin() {
    this.router.navigate(['/login']);
  }

  handleBack() {
    this.router.navigate(['/home']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon = this.showPassword ? 'eye-outline' : 'eye-off-outline';
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
    this.showConfirmPasswordIcon = this.showConfirmPassword ? 'eye-outline' : 'eye-off-outline';
  }
}
