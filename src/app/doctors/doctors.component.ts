import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToClinics() {
    console.log('navigateToClinics fired');
    this.router.navigate(['/clinics']);
  }
  navigateToHomePage()
  {this.router.navigate(['/main']);
}
}