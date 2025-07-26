import { Component } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {
  constructor(private adminAuth: AdminAuthService, private router: Router) {}
  cards = [
    {
      title: 'Manage Inventory Item',
      description: 'Manage all inventory items securely.',
      buttonText: 'Go to Inventory',
      route: '/manage-item',
      icon: 'bi bi-box-seam',
    },
    {
      title: 'Manage User',
      description: 'Add new personnel and assign roles.',
      buttonText: 'Go to User',
      route: '/manage-user',
      icon: 'bi bi-person-plus',
    },
    {
      title: 'Manage Project',
      description: 'Register and manage DRDO projects.',
      buttonText: 'Go to Project',
      route: '/manage-project',
      icon: 'bi bi-briefcase',
    },
    {
      title: 'Manage Location',
      description: 'Define and update lab locations.',
      buttonText: 'Go to Location',
      route: '/manage-location',
      icon: 'bi bi-geo-alt',
    },
  ];

  logOut() {
    this.adminAuth.logOut();
    this.router.navigate(['/']);
  }
}
