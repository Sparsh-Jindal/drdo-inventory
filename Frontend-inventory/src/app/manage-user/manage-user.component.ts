import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-user',
  standalone: false,
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css',
})
export class ManageUserComponent {
  userList: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.showAllUsers();
  }
  showAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
