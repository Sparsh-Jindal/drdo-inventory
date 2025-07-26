import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'], // ✅ correct key (note the "s")
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  isValidLogin = false;

  constructor(private router: Router, private adminAuth: AdminAuthService) {}

  onLogin() {
    this.checkLogin();
  }
  checkLogin() {
    const result = this.adminAuth.authenticate(this.username, this.password);
    console.log('Auth result:', result); // 🔍 Add this

    if (result) {
      setTimeout(() => {
        this.router.navigate(['/admin-panel']);
      }, 100);
      this.isValidLogin = false;
    } else {
      this.isValidLogin = true;
      alert('Wrong UserName and Password');
      this.router.navigate(['/']);
    }
  }
}
