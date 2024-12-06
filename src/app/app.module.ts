import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderMuhannadekComponent } from './header-muhannadek/header-muhannadek.component';
import { FooterMuhannadekComponent } from './footer-muhannadek/footer-muhannadek.component';
import { MuhannadekAdmissionFormComponent } from './muhannadek-admission-form/muhannadek-admission-form.component';
import { MuhannadekFilledInfoComponent } from './muhannadek-filled-info/muhannadek-filled-info.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Landing page
  { path: 'admission-form', component: MuhannadekAdmissionFormComponent },
  { path: 'submit', component: MuhannadekFilledInfoComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderMuhannadekComponent,
    FooterMuhannadekComponent,
    MuhannadekAdmissionFormComponent,
    MuhannadekFilledInfoComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
