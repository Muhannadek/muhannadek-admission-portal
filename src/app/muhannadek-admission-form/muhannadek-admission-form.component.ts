import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-muhannadek-admission-form',
  templateUrl: './muhannadek-admission-form.component.html',
  styleUrls: ['./muhannadek-admission-form.component.css']
})
export class MuhannadekAdmissionFormComponent implements OnInit {
  admissionForm: FormGroup;
  campuses = ['Davis', 'Trafalgar', 'HMC'];
  departments = [
    'Faculty of Animation, Arts & Design (FAAD)',
    'Faculty of Applied Health & Community Studies (FAHCS)',
    'Faculty of Applied Science & Technology (FAST)',
    'Faculty of Humanities & Social Sciences (FHASS)',
    'Pilon School of Business (PSB)'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validationService: ValidationService
  ) {
    this.admissionForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required, this.dateValidator.bind(this)]],
      email: ['', [Validators.required, Validators.email, this.emailValidator.bind(this)]],
      contactNumber: [''],
      campus: ['', [Validators.required]],
      department: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  // Custom Date Validator
  dateValidator(control: any): { [key: string]: string } | null {
    const error = this.validationService.validateDate(control.value);
    return error ? { dateError: error } : null;
  }

  // Custom Email Validator
  emailValidator(control: any): { [key: string]: string } | null {
    const error = this.validationService.validateEmail(control.value);
    return error ? { emailError: error } : null;
  }

  onSubmit(): void {
    if (this.admissionForm.valid) {
      const formData = this.admissionForm.value;
      localStorage.setItem('submittedFormData', JSON.stringify(formData)); // Save the form data to localStorage
      this.router.navigateByUrl('/dashboard'); // Redirect to the dashboard
    }
  }
}
