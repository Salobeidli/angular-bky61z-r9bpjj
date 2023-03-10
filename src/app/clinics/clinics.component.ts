import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToHomePage()
  {this.router.navigate(['/main']);
}

  navigateToDoctors() {
    this.router.navigate(['doctors']);

  }
}
