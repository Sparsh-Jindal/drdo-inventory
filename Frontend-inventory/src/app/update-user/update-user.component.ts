import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  standalone: false,
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent {
  user: User = new User();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.id).subscribe((data) => {
      this.user = data;
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.id, this.user).subscribe(() => {
      alert('✅ User updated successfully!');
      this.router.navigate(['/manage-user']);
    });
  }
}
