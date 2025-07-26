import { Component } from '@angular/core';
import { InventoryItemService } from '../inventory-item.service';
import { InventoryItem } from '../inventory-item';
import { Project } from '../project';
import { User } from '../user';
import { ProjectService } from '../project.service';
import { LocationService } from '../location.service';
import { UserService } from '../user.service';
import { subscribeOn } from 'rxjs';
import { Loco } from '../loco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-form',
  standalone: false,
  templateUrl: './inventory-form.component.html',
  styleUrl: './inventory-form.component.css',
})
export class InventoryFormComponent {
  item: InventoryItem = new InventoryItem();
  projectsI: Project[] = [];
  locationsI: Loco[] = [];
  usersI: User[] = [];
  successMessage: string = '';

  constructor(
    private inventoryService: InventoryItemService,
    private projectService: ProjectService,
    private locationService: LocationService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.showAlLocations();
    this.showAllProjects();
    this.showAllUsers();
  }
  onSubmit() {
    this.createItem();
  }

  createItem() {
    this.inventoryService.addItem(this.item).subscribe((data) => {
      console.log(data);
      this.successMessage = '✅ New item added successfully!';
      setTimeout(() => {
        this.router.navigate(['/manage-item']);
      }, 3000);
    });
  }

  showAllUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.usersI = data;
    });
  }

  showAllProjects() {
    this.projectService.displayAllProjects().subscribe((data) => {
      this.projectsI = data;
    });
  }

  showAlLocations() {
    this.locationService.displayAllLocations().subscribe((data) => {
      this.locationsI = data;
    });
  }

  isInvalidCondemnedQty(): boolean {
    return (
      this.item &&
      this.item.quantity != null &&
      this.item.condemnedQty != null &&
      this.item.condemnedQty >= this.item.quantity
    );
  }
}
