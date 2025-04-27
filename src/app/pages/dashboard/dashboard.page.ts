import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonIcon, CommonModule]
})
export class DashboardPage {
  constructor(private router: Router) {}

  goTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
