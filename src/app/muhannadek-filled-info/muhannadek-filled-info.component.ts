import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muhannadek-filled-info',
  templateUrl: './muhannadek-filled-info.component.html',
  styleUrls: ['./muhannadek-filled-info.component.css']
})
export class MuhannadekFilledInfoComponent implements OnInit {
  formData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('submittedFormData');
    this.formData = data ? JSON.parse(data) : null;
  }

  backToForm(): void {
    this.router.navigateByUrl('/');
  }
}
