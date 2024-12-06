import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-muhannadek',
  templateUrl: './footer-muhannadek.component.html',
  styleUrls: ['./footer-muhannadek.component.css']
})
export class FooterMuhannadekComponent {
  @Input() muhannadekMyData: any;
}
