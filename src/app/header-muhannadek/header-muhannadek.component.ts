import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-muhannadek',
  templateUrl: './header-muhannadek.component.html',
  styleUrls: ['./header-muhannadek.component.css']
})
export class HeaderMuhannadekComponent {
  @Input() muhannadekMyData: any;
}
