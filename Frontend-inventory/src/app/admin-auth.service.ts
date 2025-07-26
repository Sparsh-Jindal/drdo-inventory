import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor() {}

  authenticate(userName: string, password: string): boolean {
    if (userName == 'swati' && password == '1618') {
      sessionStorage.setItem('username', userName);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    console.log('User login ho gya');
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }

  logOut() {
    console.log('user log out ho gya');
    sessionStorage.removeItem('username');
  }
}
