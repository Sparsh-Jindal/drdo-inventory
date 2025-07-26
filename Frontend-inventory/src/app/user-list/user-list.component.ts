import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = [];
  userItems: InventoryItem[] = [];
  selectedUserId: number | null = null;
  constructor(
    private userService: UserService,
    private inventoryItemsService: InventoryItemService
  ) {}
  ngOnInit() {
    this.displayAllUsers();
  }
  displayAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  showItems(userId: number) {
    this.selectedUserId = userId;
    this.inventoryItemsService.displayAllItems().subscribe((data) => {
      this.userItems = data.filter((item) => item.user.id === userId);
    });
  }
}
