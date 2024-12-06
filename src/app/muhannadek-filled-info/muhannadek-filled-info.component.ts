import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-muhannadek-filled-info',
  templateUrl: './muhannadek-filled-info.component.html',
  styleUrls: ['./muhannadek-filled-info.component.css']
})
export class MuhannadekFilledInfoComponent implements OnInit {
  formData: any = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.formData = params; 
      }
    });
  }

  backToForm(): void {
    this.router.navigateByUrl('/'); 
  }
}
