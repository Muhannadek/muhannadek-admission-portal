import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muhannadekFinalExam';

  muhannadekMyData = {
    loginName: 'muhannadek',
    fullName: 'MUHANNAD EKASHEH',
    email: 'ekashehmuhannad@gmail.com',
    program: 'Computer Systems Technology - Web Development & Network Engineering'
  };

  toggleDarkMode(): void {
    document.body.classList.toggle('dark-mode');
  }
}
