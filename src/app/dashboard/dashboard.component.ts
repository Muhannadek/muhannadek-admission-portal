import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  forms: any[] = []; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('submissions');
    this.forms = storedData ? JSON.parse(storedData) : [];
  }

  deleteForm(index: number): void {
    if (confirm('Are you sure you want to delete this submission?')) {
      this.forms.splice(index, 1); 
      localStorage.setItem('submissions', JSON.stringify(this.forms)); 
    }
  }

  goToMainPage(): void {
    this.router.navigateByUrl('/'); 
  }
}
