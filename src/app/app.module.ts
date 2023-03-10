import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { DoctorsComponent } from './doctors/doctors.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'main', component: MainComponent },
      { path: 'clinics', component: ClinicsComponent },
      { path: 'doctors', component: DoctorsComponent },
    ]),
    IonicModule.forRoot({
      mode: 'md',
    }),
  ],
  declarations: [
    AppComponent,
    MainComponent,
    ClinicsComponent,
    DoctorsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
