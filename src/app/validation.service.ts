import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  validateDate(selectedDate: any): string | null {
    if (!selectedDate) {
      return 'Date should not be empty';
    }
    const today = new Date();
    const date = new Date(selectedDate);
    if (isNaN(date.getTime())) {
      return 'Date should be a valid date';
    }
    if (date >= today) {
      return 'Date of Birth cannot be today or in the future';
    }
    return null;
  }

  validateEmail(email: any): string | null {
    if (!email) {
      return 'Email is required';
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return null;
  }
}
