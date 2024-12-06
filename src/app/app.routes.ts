import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MuhannadekAdmissionFormComponent } from './muhannadek-admission-form/muhannadek-admission-form.component';
import { MuhannadekFilledInfoComponent } from './muhannadek-filled-info/muhannadek-filled-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'admission-form', component: MuhannadekAdmissionFormComponent },
  { path: 'submit', component: MuhannadekFilledInfoComponent },
  { path: 'dashboard', component: DashboardComponent }
];
