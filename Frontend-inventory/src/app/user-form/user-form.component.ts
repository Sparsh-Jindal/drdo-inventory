import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  constructor(private userService: UserService, private router: Router) {}
  user: User = new User();
  successMessage: string = '';
  onSubmit() {
    this.createUser();
  }

  createUser() {
    console.log('Sending user:', this.user); // 🔍 See exact payload
    this.userService.addUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.successMessage = 'New user added successfully!';
        setTimeout(() => {
          this.router.navigate(['/manage-user']);
        }, 3000);
      },
    });
  }
}
