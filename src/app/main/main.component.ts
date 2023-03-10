import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
})
export class MainComponent {
  constructor(private router: Router) {}

  printToScreen() {
    console.log('Button is Pressed');
    this.router.navigate(['/clinics'])
  }

  navigateToClinics() {
    console.log('navigateToClinics fired');
    this.router.navigate(['/doctors']);
  }
}
