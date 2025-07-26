import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private adminAuth: AdminAuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('Running canActivate guard...');
    if (this.adminAuth.isUserLoggedIn()) {
      console.log('✅ User is logged in, access allowed');
      return true;
    } else {
      console.log('⛔ Not logged in, redirecting to login');
      this.router.navigate(['/admin-login']);
      return false;
    }
  }
}
